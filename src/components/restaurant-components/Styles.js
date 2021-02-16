import styled from 'styled-components';
import Montauk from '../../assets/restaurant-assets/Fonts/Montauk/Montauk-Light.otf';
import bg from '../../assets/restaurant-assets/bgtexture.jpg';

export const Styles = styled.div`

@font-face {
    font-family: "Montauk";
    src: url(${Montauk});
}


    background-image: url(${bg});
    background-repeat: repeat;
    background-size: 600px 400px;
    color: #5F002B;
    background-color: #F2E9D9;


a {
    color: #5F002B;
    size: 20px;
}

a:hover {
    color: #9e1d57;
    text-decoration: underline
}

.fa-paw{
    color: #5F002B;

}

.navbar-toggler {
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 2px dotted #5f002b;
    border-radius: .25rem;
}

.navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: "";
    background: no-repeat center center;
    background-size: 100% 100%
}

h1 {
    font-family: 'Fugaz One', cursive;
    text-align: center;
    color: #5F002B;
    font-size: 30px;
}

h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0rem
}

.whiteSectionHeaders {
    background-color: white;
    height: 80px;
}

.centerCenter {
    display: flex;
    align-items: center;
    justify-content: center;
}

.container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl {
    width: 90%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto
}


.menuCardBG {
    background-color: white;
    /* width: 812px; */
    /* margin-right: 8px; */
    border: 8px;
    border-color: transparent;
}

.menuCardHeader {
    font-family: 'Fugaz One', cursive;
    font-size: 30px;
}

.menuSubhead {
    padding-bottom: 42px;
}

.menuCardImage {
    max-height: 250px;
}

.menuItem {
    font-size: 35px;
    font-family: "Montauk";
    /* padding-top: 40px; */
}

.itemDesc {
    font-size: 20px;
    font-family: "Montauk";
    line-height: 20px;
    padding-top: 10px;;
}


hr {
    border-color: #980051;
    border-width: 1px;
    padding-bottom: 40px;
    margin: 0;
}

.price {
    line-height: 30px;
}

.menuCard {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0px solid transparent;
    border-radius: 0rem;
    margin-bottom: 20px;
    /* min-width: 812px; */
    /* width: 100%; */
    /* min-height: 727px; */
}


.menu-card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    /* padding: 1.25rem; */
    padding: 23px 33px 0px 33px;
}

.footerText{
    font-family: "Montauk";
}

.footerPad{
    padding-top: 60px;
}

.rightJustify{
    text-align: end;
}

.nav-link {
    display: block;
    padding: .5rem 0rem .5rem 2rem;
    text-align: right;
}

.card-img, .card-img-bottom, .card-img-top {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%
}

.card-img, .card-img-top {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px
}

.card-img, .card-img-bottom {
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px
}

.card,
.card-img-top {
    border-radius: 0% !important;
}

p {
    font-size: 20px;
    font-family: "Montauk";
    margin-top: 0;
    margin-bottom: 0;
    line-height: 20px;
}

h1,
h2,
h3,
h5,
.bg-header {
    font-family: 'Fugaz One', cursive;
}

#story {
    font-size: 50px;
    text-align: left;
}

h3,
h5 {
    font-size: 30px;
}

.hero-image {
    background-image: url("../Images/homeHero.jpg");
    max-height: 100%;
    width: 100%;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

.photo-card {
    border-color: #FFFFFF;
    border-width: 10px;
}

.muzzlesLogo{
    max-width: 250px;
}

.height100 {
    height: 100%;
    object-fit: cover;
}
`;