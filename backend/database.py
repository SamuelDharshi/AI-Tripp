from sqlalchemy import create_engine, Column, String, Integer, Float, DateTime, JSON, ForeignKey, Enum
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from datetime import datetime
import os

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://user:password@localhost/aidreamtrip")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Database Models
class User(Base):
    __tablename__ = "users"
    
    id = Column(String, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    name = Column(String, nullable=False)
    hashed_password = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    travel_persona = Column(JSON, nullable=True)
    
    # Relationships
    trips = relationship("Trip", back_populates="user")
    chat_sessions = relationship("ChatSession", back_populates="user")

class Trip(Base):
    __tablename__ = "trips"
    
    id = Column(String, primary_key=True, index=True)
    user_id = Column(String, ForeignKey("users.id"), nullable=False)
    destination = Column(String, nullable=False)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime, nullable=False)
    budget = Column(Float, nullable=False)
    mood = Column(String, nullable=False)
    status = Column(
        Enum('planning', 'confirmed', 'ongoing', 'completed', name='trip_status'),
        default='planning'
    )
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    user = relationship("User", back_populates="trips")
    itinerary = relationship("Itinerary", back_populates="trip", uselist=False)
    chat_sessions = relationship("ChatSession", back_populates="trip")

class Itinerary(Base):
    __tablename__ = "itineraries"
    
    id = Column(String, primary_key=True, index=True)
    trip_id = Column(String, ForeignKey("trips.id"), unique=True, nullable=False)
    days = Column(JSON, nullable=False)  # Array of day plans
    accommodation = Column(JSON, nullable=True)  # Array of accommodations
    transportation = Column(JSON, nullable=True)  # Array of transportation
    total_cost = Column(Float, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    trip = relationship("Trip", back_populates="itinerary")

class ChatSession(Base):
    __tablename__ = "chat_sessions"
    
    id = Column(String, primary_key=True, index=True)
    user_id = Column(String, ForeignKey("users.id"), nullable=False)
    trip_id = Column(String, ForeignKey("trips.id"), nullable=True)
    messages = Column(JSON, nullable=False)  # Array of messages
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    user = relationship("User", back_populates="chat_sessions")
    trip = relationship("Trip", back_populates="chat_sessions")

# Create tables
def init_db():
    Base.metadata.create_all(bind=engine)

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
