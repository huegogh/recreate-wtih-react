import Circle from '../../assets/business-assets/circleWhite.png';
import Group from '../../assets/business-assets/groupPhoto.jpg';
import Kid from '../../assets/business-assets/kidSmiling.jpg';


import styled from 'styled-components';

export const Styles = styled.div`    
   
    background-color:#16161D ;


.activeTab,
.bgPurple {
    background-color: #4F449B;
}

.shadow {
    color: aliceblue;
  }

  li.tab {
      background-color: #7E75B4;
  }

  a.shadow:hover {
      color: white;
  }

  a.shadow.active {
      background-color: #4F449B !important;
      color: white !important;
  }

.textPurple {
    color: #4F449B;
}

.height100 {
    height: 100%;
    object-fit: cover;
}

.container-fluid {
    min-height: 72vh;
}

.whiteCircle {
    background-image: url(${Circle});
    background-position: center;
    background-repeat: no-repeat;
}

.goldman {
    font-family: 'Goldman', cursive;
}

#indexHero {
    background-image: url(${Group});
    background-position: center;
    background-size: cover;
    height: 500px;
}

#skillsJumbo {
    background-image: url(${Kid});
    background-position: top;
    background-size: cover;
    height: 480px;
}

.opacity80 {
    opacity: 80%;
}


.textSize350{
      font-size: 350%;
}

.tab {
    background-color: #5f4f9f;
}

.whiteLink {
    color: white !important;
}

.textSize300{
    font-size: 300%;
}
.textSize250{
    font-size: 250%;
}
.textSize200{
    font-size: 200%;
}
.textSize100{
    font-size: 100%;
}

.netLogoButtonFontSize{
    font-size: 225%;
}

.carasoulFix{
    height: 50%;
    width: 50%;
}

.hrOnBlackBG{
    border: 0;
    clear:both;
    display:block;
    width: 96%;  
    max-width: 1200px;             
    background-color: #4F449B;
    height: 1px;
}

.hrOnPurpleBG{
    border: 0;
    clear:both;
    display:block;
    width: 96%;  
    max-width: 1200px;             
    background-color: black;
    height: 3px;
}



.nav-tabs .nav-link:not(.active) {
    background-color: #7e75b4;
    color: black;
}



.nav-tabs .nav-link.active, .nav-tabs .show > .nav-link {
    color: #4F449B;
    background-color: #4F449B;
    border-color: #4F449B;
}



li::marker {
    font-size: 30px;
}

a{
    color: inherit;
}
a:hover{
    color: inherit;
}

.breadcrumb {
    background: rgba(245, 245, 245, 0);
}
.breadcrumb li {
    font-size: 14px;}
.breadcrumb a {
    color: rgba(255, 255, 255, 1);
}
.breadcrumb a:hover {
    color: rgba(255, 255, 255, 1);
}
.breadcrumb>.active {
    color: rgba(153, 153, 153, 1);
}

.bodyFontFix{
  font-size: calc(7px + (13 - 7) * ((100vw - 300px) / (1600 - 300)));
}

.videoWrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
}


.videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

`;