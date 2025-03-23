import './MapSection.scss';

export default function MapSection() {
  return (
    <div className="map-container">
      <iframe
        title="Google Maps Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.175949502429!2d106.69430071526043!3d10.776899892323295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3d63b4a7fb%3A0x2b4a6cfb38f6d254!2zMTk5IMSQaeG7h24gQsOhbiBQaMO6LCBQaMO6IDgsIELDrG5oIFRow6BuaCwgVGjhu4tjaCBNaW5oLCBWaeG7h3QgbmFt"
        width="100%"
        height="400"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
