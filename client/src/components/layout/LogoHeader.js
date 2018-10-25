import React, { Component } from 'react';
import MtSvgLines from 'react-mt-svg-lines';
import logoSVG from '../svgs/svgLogoImage';



export class componentName extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hideClass: "",
      animate: true,
      showClass: "invisible"

    };
  }

  hideLogo() {
    this.setState({
      hideClass: "hidden",
      animate: false,
      showClass: "visible"
    });
  }



  render() {
    return (
      <>

        <div className="logoHeader">
          <MtSvgLines animate={this.state.animate} duration={2000} stagger={100} timing={"ease-in"} playback={'forwards'} jsOnly={false} fade={true} callback={() => this.hideLogo()}>

            <svg className={`${this.state.hideClass} svgLogo`} width="50%" viewBox="0 0 1245.4 493.88"><g fill="none" stroke="#4D6B96" strokeWidth="3px" strokeMiterLimit="10"><path d="M361.63,321.59c.41,14.1-.35,27.76-1.11,41.37s-2.26,27.12-5.69,40.39c-1.23,4.74-3.91,8.4-6.7,12.08-1.75,2.32-4.57,2.66-7.31,2.19-2.39-.41-3.46-2.91-1.59-4.44,6.71-5.48,6.2-13.46,7.1-20.63a360.14,360.14,0,0,0,3-54.28c-.11-4,1.12-7.89.93-11.92-.85-17.93-.85-35.9-2.48-53.81-.65-7.12-.71-14.29-1.32-21.42-1.4-16.39-3-32.77-4.48-49.15-.75-8.1-1-16.25-2.55-24.28a14,14,0,0,1,.35-6.93,6.37,6.37,0,0,1,7-4.43c2.88.38,4.53,2.56,4.85,6,1.44,15.21,3.07,30.4,4.4,45.61,1.07,12.26,1.9,24.55,2.71,36.83q1.39,21.14,2.52,42.3C361.64,305.36,361.91,313.69,361.63,321.59Z" transform="translate(-98.05 -60.16)" /><path d="M314.59,76.35A298.64,298.64,0,0,0,256.45,81c-21.3,3.66-42.34,8.9-61.77,18.88a48.58,48.58,0,0,0-11.55,8.62c-4,3.89-3.12,10.9-1,15.48a21.84,21.84,0,0,0,9.23,10.13c4.38,2.5,6.32,6.75,8.09,11.06.86,2.1.6,4.36-1.61,5.76s-4,.32-5.21-1.38c-3.62-5.07-9.43-7.26-14-11-8.62-7-13.25-21.41-9.67-30.5,1.88-4.79,5.15-8.14,8.83-11.19,9.88-8.21,21.54-12.91,33.6-17,13.43-4.57,27.21-7.57,41-10.53,7.49-1.61,15.19-1.67,22.73-2.92,15.66-2.6,31.52-1.63,47.28-2.57a93.21,93.21,0,0,1,18.39,1.14c5.59.78,11.26.81,16.88,1.2,10.34.71,20.42,2.64,30.54,4.52,7,1.31,13.9,3.18,21,4.23,8.43,1.25,16.27,4.74,24.42,7.07,7.35,2.11,14.54,4.8,21.92,6.82,8.76,2.4,16.63,6.81,24.75,10.58,13.57,6.3,27.33,12.26,40,20.35,7.43,4.74,14.94,9.35,22.57,13.76,7.38,4.27,13.82,9.8,20.4,15.09,7.76,6.24,16.13,11.75,23.32,18.71,2.27,2.2,4.64,4.3,6.89,6.52q16.88,16.7,33.74,33.42a30,30,0,0,1,5.16,6.7c2.28,4.06,4.48,8.17,6.68,12.28s3.9,7.95,4.17,12.65c.32,5.77,2.55,11.65,1.86,17.23-1.36,11-4.41,21.93-10.79,31.22-5.24,7.64-11.56,14.53-17.4,21.76-2.64,3.27-6,5.73-9.27,8.32C598,324.87,588.6,332.5,579.09,340c-7.32,5.8-15.51,10.29-23.42,15.19-11.17,6.92-22,14.38-33.52,20.73-12.41,6.83-25.28,12.73-37.79,19.36-10.88,5.77-21.7,11.64-33.07,16.45q-22,9.33-43.91,19.09c-12.75,5.68-25.52,11.31-38.43,16.61-15.53,6.37-31.19,12.46-46.58,19.16-26.39,11.47-53.48,21.14-80.24,31.63-19.65,7.7-39.54,14.81-59.19,22.49-20,7.81-39.79,16-59.69,24-4.47,1.8-9,3.58-13.47,5.27-3.35,1.26-6.17.2-7.6-2.67-1.27-2.57-.69-4.58,2.38-6.78,4-2.84,8.71-4.11,13.11-6q25.32-11.18,50.78-22.05c17.59-7.48,35.14-15,52.92-22,15.77-6.21,31.46-12.65,47.15-19.05q29.78-12.15,59.51-24.41,23.49-9.75,46.86-19.79c22.28-9.61,44.47-19.42,66.74-29.06,15.91-6.88,31.08-15.24,46.49-23.1,4.45-2.27,8.85-4.64,13.38-6.74,17.12-7.94,32.44-19,48.69-28.37,18.79-10.89,35.25-25,52.5-37.93,2.73-2.06,4.79-5,7-7.7,4.63-5.44,9.09-11,13.64-16.53,3-3.57,4-8.39,5.56-12.74,4.51-12.26,3.67-24-2.12-36.05-4.4-9.12-10.57-16.38-17.68-23.23-8.76-8.44-17.25-17.15-26-25.57a247.91,247.91,0,0,0-23-19.11c-5.31-4-10.39-8.26-15.69-12.26C537,143.15,528.63,139,520.78,134c-9.82-6.25-19.81-12.32-30.53-16.94-12.36-5.34-24.11-12.09-36.95-16.32-12.64-4.16-25.26-8.46-38.1-11.88-11.21-3-22.72-4.9-34.12-7.16C359.13,77.39,336.89,76.39,314.59,76.35Z" transform="translate(-98.05 -60.16)" /><path d="M697.66,359.23c-2.56,4.88-4.13,10.47-7.41,15.17-2.54,3.64-4.8,7.44-8.81,9.92-5.54,3.43-11.42,3.29-17.31,2.09-2.79-.57-4.35,0-5.95,2.12-6.8,8.84-15.82,9.07-23.66,4.62-9-5.09-12.23-13.42-14.45-22.59A41.07,41.07,0,0,1,620,352.4c1-4.69,3.76-8,7.14-11.07,6.84-6.2,14.55-8.86,23.76-6.39,2.4.64,4.08,1.66,4,4.23-.08,2.28-1.58,3.57-3.86,3.81-2,.21-3.75,1.12-5.83,1.07-7.33-.18-12.62,3.06-15.62,9.89a6.41,6.41,0,0,0-.61,2.87c.19,5.76,0,11.42,1.61,17.23,1.52,5.32,4.83,8.19,8.95,10.63,3.84,2.28,8.57-.21,10.43-5.15a47.68,47.68,0,0,0,1.61-5.7c.66-2.76,2-5,4.88-5.71,3.17-.79,5,1.39,6.4,3.71a10.22,10.22,0,0,0,3,3.2c4,2.7,8.92,1.73,12.13-2,4.58-5.32,6-12.13,8.74-18.26a48.24,48.24,0,0,1,4.43-8.17c2-2.8,3.68-3.3,6.86-2a19.48,19.48,0,0,1,4.76,2.67,70.3,70.3,0,0,0,6.49,4.55c5.25,3.32,7.62,2.86,11.28-2.12,2.81-3.82,4.72-8.27,8.52-11.42,4.2-3.49,8.26-5.79,14.29-4.59a28.64,28.64,0,0,0,14.32-.49c2.51-.81,5.22.19,7.84-1a36.12,36.12,0,0,0,8.86-5.29c4.95-4.14,10.79-5.64,17-5.93,4.66-.22,9.33-.11,14,0a5.85,5.85,0,0,0,4.91-1.85c3.9-4.31,8.18-8.13,13.58-10.59,4.59-2.09,4.76-3.66,3.84-8.54-1.56-8.27-4.57-16.17-7.31-24.12C815,260,807,245.28,799.65,230.27c-6.15-12.51-13.63-24.23-21-36-8.72-13.88-18.08-27.32-27.44-40.76-6.14-8.81-11.93-17.9-19.62-25.55-2.09-2.08-3.63-4.72-5.81-6.79a1.89,1.89,0,0,1-.2-2.77,4.61,4.61,0,0,1,3.87,1.59c11.59,10.91,23.14,21.77,33.47,34a537.23,537.23,0,0,1,43.66,60.19,215.25,215.25,0,0,1,16.57,31.72c1.28,3.06,2.87,6,4.33,9a165,165,0,0,1,13.7,39.17c1.75,8.44,2.45,9.09,11.62,9.87a12.76,12.76,0,0,1,6.66,2.89c6.21,4.48,4,13.63-1.06,17-2.73,1.83-5.26,3.91-8.56,4.86a6.44,6.44,0,0,0-4.74,6.39c-.11,9.07-2.89,17.54-5.64,26a72.37,72.37,0,0,1-13.29,24.2c-2,2.41-4.43,4-7.76,3.72a24.14,24.14,0,0,0-5.49,0c-8.78,1.42-15.77-7.94-16.89-14.42-2.07-12-1.45-23.68,2.73-35.19,2.46-6.76,1.55-7.78-5.77-7.43-5.66.27-10.31,2.65-14.74,6.14-4.69,3.7-10,6.17-16.36,5.92-6.65-.27-13.33,0-20-.11a6.14,6.14,0,0,0-6.07,3.33c-2.83,4.65-5.69,9.3-9.65,13.2a10,10,0,0,1-6,3.25c-5.39.42-10.88,1.22-15.81-2.45C702.62,360,700.52,358.5,697.66,359.23ZM829.8,332.62c-4.16-1.8-7.76.6-11.53.45-6-.24-6.88.91-9.4,6.65a62.57,62.57,0,0,0-4.56,16.08c-.87,5.86-.9,11.91,1,17.68,1.95,5.94,7.53,7.17,12,2.73a17.29,17.29,0,0,0,1.79-2.35c3.76-5.35,5.72-11.43,7.39-17.67C828.5,348.55,830.75,341,829.8,332.62Z" transform="translate(-98.05 -60.16)" /><path d="M953.39,223.37a14.15,14.15,0,0,1,3.32.32,3.61,3.61,0,0,1,3,3.56c0,1.71-.68,3.05-2.29,3.45-6.9,1.7-7.84,7.54-8.87,13a77.75,77.75,0,0,0-.89,11.91c-.61,20.65.35,41.29,1.32,61.89.52,11,.38,21.94.66,32.9.19,7.48,1.52,14.89,1.07,22.38a20.73,20.73,0,0,0,0,2.5c.11,1.83-.27,3.59-2.35,3.73s-2.81-1.42-3-3.25c-.58-4.61-1.2-9.22-1.75-13.83-1.61-13.34-2.34-26.76-3.38-40.15-1.7-21.89-3.09-43.78-2.75-65.75.07-4.31.4-8.62.77-12.93.53-6.22,3.41-11.41,6.19-16.69C946.05,223.31,949.19,223.28,953.39,223.37Z" transform="translate(-98.05 -60.16)" /><path d="M1339.27,198.4a2.76,2.76,0,0,0-3.65-.39,9.38,9.38,0,0,0-1.91,1.58q-13,12.79-26.14,25.41c-21.65,20.67-42.14,42.56-66.06,60.78-7.92,6-15.26,12.86-23.33,18.68-10,7.19-20.58,13.46-30.57,20.61-8.75,6.26-18.74,10-28.14,14.93-7.37,3.87-14.86,7.35-23.07,9.21-9.49,2.15-18.56,5.48-28.58,6.12-9,.58-17.47.22-25.94-2.54-2.47-.8-5.16-1.37-6-4.94,2.09-.84,3.77-.5,5.4-.59,8.27-.41,16.47,1.12,24.84.19,8.88-1,17.93-.34,26.87-1.3,3.11-.33,5.82-2.21,5.83-4.33,0-2.32-2.36-4.4-5.55-4.83a11.36,11.36,0,0,0-1.5,0c-14.62,0-29.2-1.13-43.79-1.88-8.29-.43-16.56-1.7-24.88-1.31a5.82,5.82,0,0,1-6-3.64c-2-4.91-4.38-10-4.79-15.1a160.63,160.63,0,0,1,2.52-43.18c1.42-7.32,3.23-14.57,5.29-21.76a268,268,0,0,1,16.46-43.8c1.95-4,4.82-7.55,7.34-11.27a3,3,0,0,1,3.08-1.61c1.77,1.2,1.87,3.17,1.88,5.19,0,3.17-.09,6.34.08,9.5.15,2.8,1.11,5.19,4.22,5.86,3.85-2,3.79-5.7,4.28-9.13.83-5.77,1.42-11.5-.27-17.28-1.52-5.17-8.24-9.22-13.94-6a26.58,26.58,0,0,0-9,8.36A123.29,123.29,0,0,0,1061,216.1c-.59,1.58-1.14,3-2.91,3.5-1.33-1.31-.47-2.75-.82-4-1.15-4.09-1.61-8.57-5.73-11.13a62,62,0,0,0-32.06-9.53c-12.31-.24-24.51,1.08-36.7,2.75a309.13,309.13,0,0,0-38.43,8c-21,5.66-41.76,12.12-62.59,18.36a26.13,26.13,0,0,0-6.68,3.33c-2.66,1.75-3.07,4-1.62,6.94a28.4,28.4,0,0,0,1.87,2.95c1.08,1.62,1.88,4,4.34,3.4,2.71-.61,2.46-3.18,2.67-5.32a4.35,4.35,0,0,1,.52-1.1c3-1.5,6.39-2.19,9.71-3.17,13.37-4,26.8-7.73,40.14-11.81a393.54,393.54,0,0,1,56.19-13c12.63-1.91,25.43-3.14,38.26-2.25,7,.48,13.83,1.72,19.94,5.53,2.53,1.58,4,4.29,3.25,7-.88,3.19-1.69,6.47-3.55,9.29-4.74,7.19-9.45,14.4-15.39,20.72-16.55,17.61-34.7,33.5-52.87,49.38C973,300.93,967.68,306,963.42,312c-3.43,4.83-2.89,13.67,1.66,17.4,4.35,3.57,9.27,6.69,14.75,8.18a229.35,229.35,0,0,0,35.23,6.26c11.19,1.22,22.43,2.63,33.75,2.36,2.2-.05,4.82.13,6,1.83,3.17,4.49,8,6.9,11.88,10.49a27.08,27.08,0,0,0,2.18,1.8c14.36,8.13,41,14.39,85.94-3.16l2.75-1.06c8.8-4,17.21-8.87,25.93-13,8.54-4.07,15.77-10.46,23.69-15.66,10.69-7,21.19-14.27,30.67-23,5.21-4.81,10.66-9.49,16.26-13.94a154.22,154.22,0,0,0,15.33-13.5c9.91-10.3,19.22-21.18,29.14-31.46,11-11.38,21.12-23.53,32.36-34.67,2.83-2.81,5.34-5.94,8-8.91C1340,200.81,1340.44,199.66,1339.27,198.4Zm-302.5,54.3a99.83,99.83,0,0,0,15.62-21.78c.55-1,1.12-2.06,2.5-2.32,1.28.87.69,2,.32,3-4.2,11.93-6.77,24.3-9.83,36.54a118.38,118.38,0,0,0-2.38,15.71c-.75,6.75-1.75,13.48-1.67,20.35.09,7.69.13,15.28,3,22.57a10.89,10.89,0,0,1,.5,2.94,4.87,4.87,0,0,1-.21,1.32,2.75,2.75,0,0,1-2.4.74c-12-.36-23.8-2.17-35.67-3.5-7.43-.83-14.67-2.7-22-4.28-3.51-.76-6.34-2.63-9.1-4.58-.15-2.64,1.4-4.22,2.77-5.85A289.58,289.58,0,0,1,999,292l27.42-27.53Z" transform="translate(-98.05 -60.16)" /><ellipse cx="700.36" cy="280.03" rx="9.33" ry="7.21" transform="translate(48.73 732.19) rotate(-64.58)" /></g></svg>


          </MtSvgLines>

          <img className={`logoImage ${this.state.showClass}`} src={this.props.imgPath}></img>
        </div>
      </>
    );
  }
}

export default componentName

