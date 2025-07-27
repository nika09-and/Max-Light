import Map from '../components/Map';
import ContactsText from '../components/ContactsText';
import phoneIcon from '../assets/home_page/phone_icon.svg';
import mesangerIcon from '../assets/home_page/mesanger_icon.svg';
import whatsappIconIcon from '../assets/home_page/whatsappIcon.svg';
import viberIcon from '../assets/home_page/viberIcon.svg';

export default function Contacts() {
    return (
        <div id='contacts'>
            <Map />
            <div id='contactsText'>
                <ContactsText
                    icon={phoneIcon}
                    header="Phone"
                    description="Contact us on a phone"
                    information="+995 557 778 837"
                />

                <ContactsText
                    icon={viberIcon}
                    header="Viber"
                    description="Contact us on a viber"
                    information="+995 557 778 837"
                />

                <ContactsText
                    icon={whatsappIconIcon}
                    header="Whatsapp"
                    description="Contact us on a Whatsapp"
                    information="+995 557 778 837"
                />

                <ContactsText
                    icon={mesangerIcon}
                    header="Messenger"
                    description="Seach us on a Messenger"
                    information="Max-Light Georgia"
                />
            </div>
        </div>
    );
}