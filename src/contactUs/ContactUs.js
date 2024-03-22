import React from 'react'
import "./ContactUs.css"

export default function ContactUs() {
    return (
        <div id="contactUsMainContainer">
            <div style={{color:"#767676",letterSpacing: "5px"}} >
                Hello How can We Help ?
            </div>
           
            <div style={{clear:"both"}}></div>

            <div className='mt-4' style={{ textAlign: "center" }}>
                <div className='mt-5'>
                    <div>
                        <img id="BMCHospLocation" className='contactUsIcons' alt="" src='/icons/maps.png' />
                    </div>
                    <div className='contactUsTitles'>
                        Location
                    </div>
                    <div>
                       Dubai, Marina Bay
                    </div>
                </div>
                <div className='mt-5'>
                    <div>
                        <img id="BMCHospTel" className='contactUsIcons' alt="" src='/icons/call.png' />
                    </div>
                    <div className='contactUsTitles'>
                        Telephone 
                    </div>
                    <div>
                        71-648348
                    </div>
                </div>
                
                <div className='mt-5'>
                    <div>
                        <img id="BMCHospEmail" className='contactUsIcons' alt="" src='/icons/email.png' />
                    </div>
                    <div className='contactUsTitles'>
                        Email
                    </div>
                    <div>
                       Test.test@gamil.com
                    </div>
                </div>
            </div>

            <div id="mainExtension"className='mt-5'>
                <div className='title' style={{color:'grey'}} >
                   Main Extensions
                </div>
                <div style={{clear:"both"}}></div>
           
                <div className='mt-2'>
                    <div>
                        Fax Number: 
                    &nbsp;
                    </div>
                    <p className='appTextColorGreen'>
                       01-234567
                    </p>
                </div>
                {/* <div className='mt-2'>
                    <div>
                        {languageUsed.outPatClinics ? languageUsed.outPatClinics[language] : ""}
                    &nbsp;
                    </div>
                    <p className='appTextColorGreen'>
                        {languageUsed.outPatClinicsDetail ? languageUsed.outPatClinicsDetail[language] : ""}
                    </p>
                </div>
                <div className='mt-2'>
                    <div>
                        {languageUsed.patRooms ? languageUsed.patRooms[language] : ""}
                    &nbsp;
                    </div>
                    <p className='appTextColorGreen'>
                        {languageUsed.patRoomsDetail ? languageUsed.patRoomsDetail[language] : ""}
                    </p>
                </div>
                <div className='mt-2'>
                    <div>
                        {languageUsed.genInfo ? languageUsed.genInfo[language] : ""}
                    &nbsp;
                    </div>
                    <p className='appTextColorGreen'>
                        {languageUsed.genInfoDetail ? languageUsed.genInfoDetail[language] : ""}
                    </p>
                </div>
                <div className='mt-2'>
                    <div>
                        {languageUsed.erUnit ? languageUsed.erUnit[language] : ""}
                    &nbsp;
                    </div>
                    <p className='appTextColorGreen'>
                        {languageUsed.erUnitDetail ? languageUsed.erUnitDetail[language] : ""}
                    </p>
                </div>
                <div className='mt-2'>
                    <div>
                        {languageUsed.radio ? languageUsed.radio[language] : ""}
                    &nbsp;
                    </div>
                    <p className='appTextColorGreen'>
                        {languageUsed.radioDetail ? languageUsed.radioDetail[language] : ""}
                    </p>
                </div>
                <div className='mt-2'>
                    <div>
                        {languageUsed.labo ? languageUsed.labo[language] : ""}
                    &nbsp;
                    </div>
                    <p className='appTextColorGreen'>
                        {languageUsed.laboDetail ? languageUsed.laboDetail[language] : ""}
                    </p>
                </div>
                <div className='mt-2'>
                    <div>
                        {languageUsed.admOffice ? languageUsed.admOffice[language] : ""}
                    &nbsp;
                    </div>
                    <p className='appTextColorGreen'>
                        {languageUsed.admOfficeDetail ? languageUsed.admOfficeDetail[language] : ""}
                    </p>
                </div>
                <div className='mt-2'>
                    <div>
                        {languageUsed.billingOffice ? languageUsed.billingOffice[language] : ""}
                    &nbsp;
                    </div>
                    <p className='appTextColorGreen'>
                        {languageUsed.billingOfficeDetail ? languageUsed.billingOfficeDetail[language] : ""}
                    </p>
                </div>
                <div className='mt-2'>
                    <div>
                        {languageUsed.intPatients ? languageUsed.intPatients[language] : ""}
                    &nbsp;
                    </div>
                    <p className='appTextColorGreen'>
                        {languageUsed.intPatientsDetail ? languageUsed.intPatientsDetail[language] : ""}
                    </p>
                </div> */}
            </div>
        </div>
    )
}