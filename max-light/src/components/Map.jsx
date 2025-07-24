export default function Map() {
    return (
        <div id="map">
            {/* Embedded Google Map */}
            <iframe
                title="Google Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2979.2287962172604!2d44.79825547657757!3d41.69399627692018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sliberty%20square!5e0!3m2!1sen!2sge!4v1753382268534!5m2!1sen!2sge"
            ></iframe>
            <div className="mapOverlay">visit us <br></br>on the address</div>
        </div>
    );
}