import React, { Component } from 'react';
import { Link } from 'react-router';
import {Router, Route, IndexRoute, hashHistory} from "react-router";


class Mobiles extends Component {
  constructor (props) {
    super(props);
    this.state = { 
            mobiles: [{
              _id: 1,
              image: '../assets/images/img_1.jpeg',
              product_name: 'Moto E5 Plus (Black, 3GB RAM, 32GB Storage)',
              color: 'Indigo Black',
              price: '10,000.00',
              discription1: 'Camera: 12+5 MP Dual rear cameras with Creative camera system | 16 MP front camera with Low light mode and LED flash',
              discription2: 'Display: 14.5 centimeters (5.7-inch) Full HD+ Max vision display with 1080x2160 pixels and 18:9 aspect ratio', 
              discription3: 'Memory, Storage & SIM: 4GB RAM | 64GB storage expandable up to 256GB | Dual nano SIM with dual standby (4G+4G)',
              discription4: 'Operating System and Processor: Android v8.0 Oreo operating system with Snapdragon 450 1.8GHz octa core processor',
              discription5: 'Battery: 3000 mAH lithium ion battery with 15W Turbo charging',
              discription6: 'Warranty: 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',
              discription7: 'Included in box: 15W Turbo charger, Headset and USB Cable',	
	        },
          {
              _id:2,
              image: '../assets/images/img_7.jpeg',
              product_name: 'Samsung Galaxy M10 (Ocean Blue, 3+32GB)',
              color: 'Ocean Blue',
              price: '8,990.00',
              discription1: '13MP+5MP ultra-wide angle dual camera | 5MP f2.0 front camera. The internet usage time is 15 hours for 3G as well as 19 hours for LTE.The video playback time is 17 hours and audio playback time is 84 hours',
              discription2: '15.8cm (6.22") HD+ Infinity V Display with 90% screen ratio', 
              discription3: '3GB RAM and 32GB internal memory expandable up to 512GB in a dedicated slot',
              discription4: 'Fast face unlock | 3400 mAh lithium-ion battery',
              discription5: 'Dual SIM (nano+nano) with dual standby and dual VoLTE',
              discription6: '1.6GHz Exynos 7870 octa-core processor | Android Oreo v8.1 OS',
              discription7: '1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',
          },
          {
              _id:3,
              image: '../assets/images/img_3.jpeg',
              product_name: 'Samsung Galaxy M30 (Gradation Black, 4+64 GB)',
              color: 'Gradation Black',
              price: '14,990.00',
              discription1: '13+5+5MP Triple rear camera with f1.9 aperture, 2.2 wide angle, 2.2 flash | 16MP front camera with f2.0 aperture',
              discription2: '16.21 centimeters (6.4-inch) FHD+ multi-touch capacitive touchscreen with 2340 x 1080 pixels resolution and 16M color support', 
              discription3: 'Memory, Storage and SIM: 4GB RAM | 64GB internal memory expandable up to 512GB | Dual SIM (nano+nano) dual-standby (4G+4G)',
              discription4: 'Android Oreo v8.1 operating system with 1.8GHz Exynos 7904 octa core processor',
              discription5: '5000mAH lithium-ion battery with 3x fast charge | 15W Type-C fast charger in the box',
              discription6: '1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',
              discription7: 'Box also includes: Travel Adapter, USB Cable, Ejection Pin and User Manual',
          },
          {
              _id:4,
              image: '../assets/images/img_4.jpeg',
              product_name: 'OPPO A7 (White, 4GB RAM, 64GB Storage)',
              color: 'White',
              price: '14,990.00',
              discription1: '16MP rear camera with AI beauty, HDR, background blur, sticker, filter | 13MP+2MP dual front camera',
              discription2: '15.7 centimeters (6.2-inch) multi-touch capacitive screen with 1520 x 720 pixels resolution | 270 ppi pixel density | 16.7M color support', 
              discription3: 'Memory, Storage and SIM: 4GB RAM | 64GB internal memory expandable up to 256GB | Dual SIM (nano+nano) dual-standby (4G+4G)',
              discription4: 'ColorOS v5.2 operating system with 1.8GHz Qualcomm Snapdragon 450 octa core processor, Adreno 506',
              discription5: '4230mAH lithium-ion battery',
              discription6: '1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',
          },
          {
              _id:5,
              image: '../assets/images/img_5.jpeg',
              product_name: 'OPPO A3s (Dark Purple, 3GB RAM, 32GB Storage)',
              color: 'Thunder Black',
              price: '9,990.00',
              discription1: 'Camera: 13+2 MP Dual rear camera | 8 MP front camera',
              discription2: 'Display: 15.74 centimeters (6.2-inch) HD capacitive touchscreen display with 1520x720 pixels and 19:9 aspect ratio', 
              discription3: 'Memory, Storage & SIM: 3GB RAM | 32GB storage expandable up to 256GB | Dual SIM (nano+nano) with dual standby (4G+4G)',
              discription4: 'Face Unlock : Fast, convenient and accurate, face unlock is just like saying hello to your A3s. Whether you have wet hands or are wearing gloves, facial unlock can still unlock your phone immediately',
              discription5: 'Operating System and Processor: Android v8.1 Oreo based on Color OS 5.1 operating system with 1.8GHz Qualcomm Snapdragon 450 octa core processor',
              discription6: 'Warranty: 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',
              discription7: 'Included in box: Travel adaptor, USB Cable (Earphones to be purchased separately)',  

          },
          {
              _id:6,
              image: '../assets/images/img_9.jpeg',
              product_name: 'Samsung On7 Pro (Black, 2GB RAM, 16GB Storage)',
              color: 'Black',
              price: '6,590.00',
              discription1: '13MP+5MP ultra-wide angle dual camera | 5MP f2.0 front camera. The internet usage time is 15 hours for 3G as well as 19 hours for LTE.The video playback time is 17 hours and audio playback time is 84 hoursCamera: 13 MP Rear camera with Auto mode, Beauty face, Continuous shot, Interval shot, Panorama mode | 5 MP front camera with Palm gesture selfie and 120 Degree selfie mode',
              discription2: 'Display: 13.86 centimeters (5.5-inch) HD TFT capacitive touchscreen display with 720x1280 pixels', 
              discription3: 'Memory, Storage & SIM: 2GB RAM | 16GB storage expandable up to 128GB | Dual micro SIM with dual standby (4G+4G)',
              discription4: 'Operating System and Processor: Android v6.0 Marshmallow operating system with 1.2GHz Qualcomm Snapdragon quad core processor',
              discription5: 'Battery: 3000 mAH lithium ion battery. Internet Usage Time(3G)-Up to 10 hrs. Internet Usage Time(LTE)-Up to 12 hrs. Internet Usage Time(Wi-Fi)-Up to 14 hrs. Video Playback Time-Up to 12hrs. Audio Playback Time-Up to 78 hrs',
              discription6: 'Warranty: 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',
              discription7: 'Included in box: Travel adaptor, USB Cable (Earphones to be purchased separately)',  
          },
          {
              _id:7,
              image: '../assets/images/img_7.jpeg',
              product_name: 'Samsung Galaxy A8 Star (Black, 6GB RAM, 64GB Storage)',
              color: 'Black',
              price: '19,990.00',
              discription1: 'Camera: 24+16 MP Dual rear camera | 24 MP front camera',
              discription2: 'Display: 16.0 centimetres (6.3-inch) FHD+ Super AMOLED with 1080x2220 pixels', 
              discription3: 'Memory, Storage & SIM: 6GB RAM | 64GB storage expandable up to 400GB | Dual SIM with dual-standby (4G+4G)',
              discription4: 'Operating System and Processor: Android v8.0 operating system with 2.2GHz SDM660 Snapdragon Qualcomm octa core processor',
              discription5: 'Battery: 3700 mAH lithium ion battery',
              discription6: 'Warranty: 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',
              discription7: 'Included in box: Charger, Earphone',
          },
          {
              _id:8,
              image: '../assets/images/img_8.jpeg',
              product_name: 'Nokia 216 (White)',
              color: 'White',
              price: '2,449.00',
              discription1: '0.3MP primary camera with LED flash',
              discription2: '6.096 centimeters (2.4-inch) QVGA display with 230 x 320 pixels resolution', 
              discription3: '16MB RAM expandable memory up to 32GB and dual SIM (2G+2G)',
              discription4: '1020mAH lithium-ion battery',
              discription5: 'Included in box: Charger, Earphone',
              discription6: '1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',
              discription7: 'For any assistance contact_us on: [ 1800 1028 169 ] (between our Working Timings-9:00 am to 6:00 pm: Mon-Sun)',
          }

          ]
      }
      
  }
  

  render() {
        return (
          <div>
                <div>{this.state.mobiles.filter(mobile=> mobile._id==this.props.params.id).map((mobiles_details, index)=>
                <Content key={index} mobiles = {mobiles_details}/>)}</div>
          </div>
        );
      }
}


class Content extends Component {
render() {
    return(
      <div>
       <table>
        <tbody>
          <tr>
              <td><img className="img" src={this.props.mobiles.image} alt="image"/></td>
                  <td valign="top">
                <p Style="font-size: 20px;">{this.props.mobiles.product_name}</p>
                <p><span Style="color:gray">Price:</span>&nbsp; <span Style="color:#b12d38">{this.props.mobiles.price}</span></p>
                <p><span Style="color:gray">Color:</span>&nbsp;<b>{this.props.mobiles.color}</b></p>
                <p className="discription">{this.props.mobiles.discription1}</p>
                <p className="discription">{this.props.mobiles.discription2}</p>
                <p className="discription">{this.props.mobiles.discription3}</p>
                <p className="discription">{this.props.mobiles.discription4}</p>
                <p className="discription">{this.props.mobiles.discription5}</p>
                <p className="discription">{this.props.mobiles.discription6}</p>
                <p className="discription">{this.props.mobiles.discription7}</p>
             </td>
          </tr> 
      </tbody>
    </table>           
       </div> 
    );
  }     
}
export default Mobiles;



