import React from 'react'
import Button from './components/Button/Button.js';
import { DiReact } from "react-icons/di";
function Buttons() {
    return (
        <div className='container'>
            <h1>Buttons</h1>            
            <div className='buttons-list'>
                <Button value="Default" variant="default" label="Default"/>
                <Button value="Default" variant="outline" label="Outlined"/>
                <Button value="Default" variant="text" label="Text"/>
                <Button value="Default" variant="default" color="primary" disableShadow="true" label="Shadow Disabled"/>
                <Button value="Default" variant="default" disable="true" label="Disabled"/>
                <Button value="Default" variant="text" disable="true" label="Text Disabled"/>
                <Button value="Default" size="sm" color="primary" label="size sm"/>
                <Button value="Default" size="md" color="primary" label="size md"/>
                <Button value="Default" size="lg" color="primary" label="size lg"/>
                <Button value="Default" color="default" label="Default Color"/> 
                <Button value="Primary" color="primary" label="Primary Color"/>
                <Button value="Secondary" color="secondary" label="Secondary Color"/>
                <Button value="Danger" color="danger" label="Danger Color" />
                <Button value="Default" color="primary" label="Start Icon" startIcon={<DiReact/>}/>
                <Button value="Default" color="primary" label="End Icon" endIcon={<DiReact/>}/>
            </div>
        </div>
    )
}

export default Buttons
