type LocationSectionProps = {
  time: string;
};

function LocationSection({ time }: LocationSectionProps) {
  return (
    <section className="card location-card">
      <div className="map-container">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=90.3200%2C23.7300%2C90.4500%2C23.8200&layer=mapnik&marker=23.7808%2C90.3592"
          title="Map of Dhaka, Bangladesh"
        ></iframe>
      </div>
      <div className="glass-overlay">
        <div className="time-widget">
          <span>{time}</span>
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
