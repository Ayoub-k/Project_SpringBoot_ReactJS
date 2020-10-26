package org.sid.entities;

import java.time.Instant;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Instant date;
    private String title;
    private String description;
    @ManyToMany
    @JoinTable( name = "T_Event_User_Associations",
                joinColumns = @JoinColumn( name = "idEvent" ),
                inverseJoinColumns = @JoinColumn( name = "idUser" ) )
    private Set<User> attendees;
    
    @ManyToOne(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
    private Group group;
	public Event() {
		super();
	}
	public Event(Instant date, String title, String description ) {
		super();
		this.date = date;
		this.title = title;
		this.description = description;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Instant getDate() {
		return date;
	}
	public void setDate(Instant date) {
		this.date = date;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Set<User> getAttendees() {
		return attendees;
	}
	public void setAttendees(Set<User> attendees) {
		this.attendees = attendees;
	}
	@Override
	public String toString() {
		return "Event [id=" + id + ", date=" + date + ", title=" + title + ", description=" + description
				+ ", attendees=" + attendees + "]";
	}
    
	
    
}
