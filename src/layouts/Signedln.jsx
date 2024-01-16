import React from 'react'
import { Dropdown,Menu,Image} from 'semantic-ui-react'

export default function Signedln({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://media.licdn.com/dms/image/D4D03AQFlxxX-3hpzsw/profile-displayphoto-shrink_200_200/0/1669644629452?e=1710374400&v=beta&t=5rl5q7X8aNa4D9bNTa0q_UCgvLO-g38o9hIR4qCMLpQ"/>
            <Dropdown pointing="top left" text="Sinan">
             <Dropdown.Menu>
             <Dropdown.Item text="Bilgilerim" icon="info"/>
             <Dropdown.Item onClick={signOut}  text="Çıkış Yap" icon="sign-out"/>   
             </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
