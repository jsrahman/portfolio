

function LocationSection() {
  return (
    <section className="card location-card">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14601.39847074228!2d90.3577280794778!3d23.806163693604322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1774010488971!5m2!1sen!2sbd"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="glass-overlay">
        <div className="time-widget">
          {/* <span>{time}</span> */}
          <small>Dhaka, BD</small>
        </div>
        <div className="location-icon">
          <i className="fas fa-location-arrow"></i>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
