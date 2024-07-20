import React from 'react';

const styles = {
  body: {
    textAlign: 'center',
    font: '12px Verdana',
    color: '#565656',
    backgroundColor: '#e9e9e9',
    margin: 0,
    padding: 0,
  },
  a: {
    color: '#dc1000',
    textDecoration: 'none',
  },
  aHover: {
    color: '#000000',
  },
  img: {
    border: 0,
  },
  break: {
    fontSize: 0,
    width: 0,
    height: 0,
    clear: 'both',
  },
  alignleft: {
    float: 'left',
    margin: '4px 10px 5px 0',
  },
  alignright: {
    float: 'right',
    margin: '4px 0 5px 0',
  },
  wrapper: {
    width: '900px',
    margin: '20px auto',
    textAlign: 'left',
  },
  header: {
    background: 'url(images/menu_bg.gif) no-repeat left top',
    padding: '10px',
  },
  headerUl: {
    listStyle: 'none',
    margin: '0 0 10px 0',
    padding: 0,
  },
  headerLi: {
    display: 'inline',
    margin: 0,
    padding: '0 10px 0 0',
  },
  headerLiFirst: {
    paddingLeft: 0,
  },
  headerLinks: {
    font: '10px Verdana',
    padding: '0 0 0 10px',
  },
  headerLogo: {
    margin: '20px 0',
  },
  headerLogoH1: {
    font: 'bold 30px Georgia, "Times New Roman", Times, serif',
    margin: 0,
  },
  headerLogoP: {
    fontSize: '10px',
    margin: 0,
  },
  headerAd468x60: {
    margin: '10px 0',
  },
  headerOl: {
    background: '#3c7fb1',
    listStyle: 'none',
    margin: 0,
    padding: '5px',
  },
  headerOlLi: {
    display: 'inline',
    margin: '0 0 0 10px',
  },
  content: {
    float: 'left',
    width: '620px',
    margin: '20px 0',
  },
  post: {
    borderBottom: '1px solid #d3d3d3',
    margin: '0 0 20px 0',
    padding: '0 0 20px 0',
  },
  thumb: {
    float: 'left',
    margin: '0 10px 0 0',
  },
  postH2: {
    font: 'bold 14px Georgia, "Times New Roman", Times, serif',
    margin: '0 0 5px 0',
  },
  postPDate: {
    fontSize: '10px',
    margin: '0 0 10px 0',
  },
  postP: {
    margin: '0 0 10px 0',
  },
  postAContinue: {
    fontSize: '10px',
  },
  postnav: {
    borderTop: '1px solid #d3d3d3',
    margin: '0 0 20px 0',
    padding: '20px 0',
  },
  postnavUl: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  postnavLi: {
    display: 'inline',
    margin: 0,
    padding: '0 5px 0 0',
  },
  sidebar: {
    float: 'right',
    width: '250px',
    margin: '20px 0',
  },
  ads: {
    margin: '0 0 20px 0',
  },
  search: {
    margin: '0 0 20px 0',
  },
  searchInput: {
    width: '120px',
  },
  searchButton: {
    margin: '0 0 0 5px',
  },
  wrapperSidebar: {
    margin: '0 0 20px 0',
  },
  wrapperSidebarH2: {
    font: 'bold 12px Georgia, "Times New Roman", Times, serif',
    margin: '0 0 10px 0',
  },
  wrapperSidebarUl: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  wrapperSidebarLi: {
    margin: '0 0 10px 0',
  },
  flickr: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  flickrA: {
    margin: '0 5px 5px 0',
  },
  video: {
    textAlign: 'center',
  },
  videoImg: {
    width: '100%',
  },
  tags: {
    margin: '0 0 20px 0',
  },
  lSbar: {
    float: 'left',
    width: '100%',
    margin: '0 0 20px 0',
  },
  lSbarH2: {
    font: 'bold 12px Georgia, "Times New Roman", Times, serif',
    margin: '0 0 10px 0',
  },
  lSbarUl: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  lSbarLi: {
    margin: '0 0 10px 0',
  },
  rSbar: {
    float: 'right',
    width: '100%',
    margin: '0 0 20px 0',
  },
  rSbarH2: {
    font: 'bold 12px Georgia, "Times New Roman", Times, serif',
    margin: '0 0 10px 0',
  },
  rSbarUl: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  rSbarLi: {
    margin: '0 0 10px 0',
  },
  footer: {
    clear: 'both',
    textAlign: 'center',
    fontSize: '10px',
    margin: '20px 0 0 0',
    padding: '10px',
    background: '#f1f1f1',
  },
};

const News = () => {
  return (
    <div style={styles.body}>
      <div style={styles.wrapper}>
        <div style={styles.header}>
          <ul style={styles.headerUl}>
            <li style={{ ...styles.headerLi, ...styles.headerLiFirst }}><a href="#">Home</a></li>
            <li style={styles.headerLi}><a href="about.html">About Us</a></li>
            <li style={styles.headerLi}><a href="page.html">Demo Page</a></li>
            <li style={styles.headerLi}><a href="contact.html">Contact Page</a></li>
          </ul>
          <p style={styles.headerLinks}>
            Subscribe: <a href="#">Posts</a> | <a href="#">Comments</a> | <a href="#">Email</a>
          </p>
          <div style={styles.break}></div>
          <div style={styles.headerLogo}>
            <h1 style={styles.headerLogoH1}><a href="#">The Web News</a></h1>
            <p style={styles.headerLogoP}>Free CSS Template</p>
          </div>
          <div style={styles.headerAd468x60}>
            <a href="#"><img src="images/ad468x60.gif" alt="" /></a>
          </div>
          <div style={styles.break}></div>
          <ol style={styles.headerOl}>
            <li style={styles.headerOlLi}><a href="#">Advertising</a></li>
            <li style={styles.headerOlLi}><a href="#">Entertainment</a></li>
            <li style={styles.headerOlLi}><a href="#">Fashion</a></li>
            <li style={styles.headerOlLi}><a href="#">Lifestyle</a></li>
            <li style={styles.headerOlLi}><a href="#">Pictures</a></li>
            <li style={styles.headerOlLi}><a href="#">Videos</a></li>
          </ol>
          <div style={styles.break}></div>
        </div>
        <div style={styles.content}>
          {Array.from({ length: 6 }).map((_, index) => (
            <div style={styles.post} key={index}>
              <div style={styles.thumb}>
                <a href="#"><img src={`https://i.postimg.cc/SNjMZDmv/download-3.jpg`} alt="" /></a>
              </div>
              <h2 style={styles.postH2}><a href="#">A cras tincidunt, ut tellus et Gravida Ipsum</a></h2>
              <p style={styles.postPDate}>Posted on January 7, 2008 by admin</p>
              <p style={styles.postP}>Elementum ea, nibh et, velit sed sagittis. Ipsum libero. Viverra integer enim, sed dolor. Inceptos elit, vitae et. Eget eget nec, lectus nisl, vehicula est feugiat. cum condimentum mattis dui fusce ut, vel convallis suspendisse suspendisse sed in. Libero blandit curae at magna ut, id mauris suspendisse ligula neque integer non.</p>
              <a style={styles.postAContinue} href="#">Continue Reading</a>
            </div>
          ))}
          <div style={styles.postnav}>
            <ul style={styles.postnavUl}>
              <li style={styles.postnavLi}><a href="#">1</a></li>
              <li style={styles.postnavLi}><a href="#">2</a></li>
              <li style={styles.postnavLi}><a href="#">&raquo;</a></li>
            </ul>
            <div style={styles.break}></div>
          </div>
        </div>
        <div style={styles.sidebar}>
          <div style={styles.ads}>
            <a href="#"><img src="images/ad125x125.jpg" alt="" /></a>
            <a href="#"><img src="images/ad125x125.jpg" alt="" /></a>
            <a href="#"><img src="images/ad125x125.jpg" alt="" /></a>
            <a href="#"><img src="images/ad125x125.jpg" alt="" /></a>
          </div>
          <form style={styles.search} action="#">
            <input style={styles.searchInput} type="text" name="s" id="s" />
            <button style={styles.searchButton} type="submit">Search</button>
          </form>
          
         
        </div>
        <div style={styles.footer}>
          <p>Copyright &copy; 2009 - <a href="#">Website Name</a> &middot; All Rights Reserved</p>
          <p>Template by: <a href="http://www.wpthemedesigner.com/">WordPress Designer</a> | Get More <a href="#">Free CSS Templates</a></p>
        </div>
      </div>
    </div>
  );
};

export default News;
