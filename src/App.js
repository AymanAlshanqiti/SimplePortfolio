import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import avatar from "./images/avatar.jpg";

class App extends Component {
  render() {
    return (
      <div className="">
        <div id="wrapper">
          <header id="header">
            <span className="avatar">
              <img src={require("./images/avatar.jpg")} alt="" />
            </span>
            <h1 style={{ fontFamily: "'El Messiri', sans-serif" }}>
              <strong>أيمن الشنقيطي</strong>
              <a href="http://templated.co" />
              <br />
            </h1>

            <h1 style={{ fontFamily: "'El Messiri', sans-serif" }}>
              حياتنا عبارة عن قصة قصيرة نصنع أحداثها مرة واحدة ثم نمضي <br />
              <strong>نعيش حياة واحدة ..</strong> لنجعلها تستحق
              <a href="http://templated.co" />
              <br />
            </h1>
            <h3
              style={{
                fontFamily:
                  "'El Messiri', sans-serif, color: rgba(183, 183, 183, 0.8)"
              }}
            >
              مهتم في البرمجة والذكاء الاصطناعي وعلوم الفيزياء والفضاء والفنون
              والبزنس
            </h3>
            <ul className="icons">
              <li>
                <a
                  href="https://twitter.com/aysh9014"
                  className="icon style2 fa-twitter"
                  target="blank"
                >
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/aysh9014"
                  className="icon style2 fa-instagram"
                  target="blank"
                >
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto: ayman.alshanqiti@gmail.com"
                  className="icon style2 fa-envelope-o"
                  target="blank"
                >
                  <span className="label">Email</span>
                </a>
              </li>
            </ul>
          </header>

          <section id="main">
            <section className="thumbnails">
              <div>
                <a href="./images/fulls/01.jpg">
                  <img src={require("./images/thumbs/01.jpg")} alt="" />
                  <h3>مؤسس تطبيق لتوصيل الطعام</h3>
                </a>
                <a href="./images/fulls/15.jpg">
                  <img src={require("./images/thumbs/15.jpg")} alt="" />
                  <h3>مهتم في البزنس وتطوير الشركات</h3>
                </a>
                <a href="./images/fulls/11.jpg">
                  <img src={require("./images/thumbs/11.jpg")} alt="" />
                  <h3>شاركت في مسرعة أعمال تسعة أعشار بكاوست</h3>
                </a>
                <a href="./images/fulls/08.jpg">
                  <img src={require("./images/thumbs/08.jpg")} alt="" />
                  <h3>أعشق متابعة العلوم والفضاء</h3>
                </a>
                <a href="./images/fulls/16.jpg">
                  <img src={require("./images/thumbs/16.JPG")} alt="" />
                  <h3>أحب الطبخ في البر</h3>
                </a>
                <a href="./images/fulls/10.jpg">
                  <img src={require("./images/thumbs/10.jpg")} alt="" />
                  <h3>يوم اطفش احب أشخمط</h3>
                </a>
              </div>

              <div>
                <a href="./images/fulls/04.jpg">
                  <img src={require("./images/thumbs/04.jpg")} alt="" />
                  <h3>أعشق التحديات والمغامرات</h3>
                </a>
                <a href="./images/fulls/02.jpg">
                  <img src={require("./images/thumbs/02.JPG")} alt="" />
                  <h3>أمتلك قدرات تأثير عالية على الآخرين</h3>
                </a>
                <a href="./images/fulls/03.jpg">
                  <img src={require("./images/thumbs/03.jpg")} alt="" />
                  <h3>أنشأت شركة متخصصة في تطوير البرمجيات</h3>
                </a>
                <a href="./images/fulls/12.jpg">
                  <img src={require("./images/thumbs/12.jpg")} alt="" />
                  <h3>شاركت في مسرعة أعمال مكة</h3>
                </a>
                <a href="./images/fulls/05.jpg">
                  <img src={require("./images/thumbs/05.jpg")} alt="" />
                  <h3>أحب السفر والتعرف على ثقافات الشعوب</h3>
                </a>
                <a href="./images/fulls/17.jpg">
                  <img src={require("./images/thumbs/17.JPG")} alt="" />
                  <h3>معسكر طويق من أفضل استثمارات حياتي</h3>
                </a>
              </div>

              <div>
                <a href="./images/fulls/06.jpg">
                  <img src={require("./images/thumbs/06.JPG")} alt="" />
                  <h3>فزنا بجائزة أفضل شركة ناشئة في مكة</h3>
                </a>
                <a href="./images/fulls/14.jpg">
                  <img src={require("./images/thumbs/14.JPG")} alt="" />
                  <h3>ProgramizeMe أدرت برنامج صناعة المبرمجين</h3>
                </a>
                <a href="./images/fulls/09.jpg">
                  <img src={require("./images/thumbs/09.jpg")} alt="" />
                  <h3>
                    مثّلت المملكة العربية السعودية في مخيم الجامبوري العالمي
                    بكندا
                  </h3>
                </a>
                <a href="./images/fulls/13.jpg">
                  <img src={require("./images/thumbs/13.JPG")} alt="" />
                  <h3>شخصيات الأبطال الخارقون محببة لدي</h3>
                </a>
                <a href="./images/fulls/07.jpg">
                  <img src={require("./images/thumbs/07.JPG")} alt="" />
                  <h3>القهوة جزء من عائلتي</h3>
                </a>
              </div>
            </section>
          </section>

          <footer id="footer">
            <p>في رحلة العمر والأيام مسرعة، لا تنسَ من انت أو ما وجهة السفر</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
