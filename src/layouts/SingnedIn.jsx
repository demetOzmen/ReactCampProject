import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export default function SingnedIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced = "right" src=""/>
            <Dropdown pointing="top left" text="Demet">
            <Dropdown.Menu>
                <Dropdown.Item text="Bilgilerim" icon="info"/>
                <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
            </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
