import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { InputName } from "../../components/InputName";
import "./style.css";

export const Screen = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="screen">
      <div
        className="index"
        style={{
          height: screenWidth < 1919 ? "36px" : screenWidth >= 1919 ? "3691px" : undefined,
          position: screenWidth >= 1919 ? "relative" : undefined,
          width: screenWidth < 1919 ? "36px" : screenWidth >= 1919 ? "1919px" : undefined,
        }}
      >
        {screenWidth < 1919 && <div className="rectangle" />}

        {screenWidth >= 1919 && (
          <>
            <div className="overlap">
              <div className="div" />
              <div className="rectangle-2" />
            </div>
            <div className="overlap-group">
              <img
                className="div-links-wrap"
                alt="Div links wrap"
                src="https://anima-uploads.s3.amazonaws.com/projects/648f5b30c41da9e14e0139ec/releases/648f5d32b28ec4c8efe5b988/img/div-links-wrap@2x.png"
              />
              <div className="div-wrapper">
                <div className="section-main">
                  <div className="div-items-row">
                    <div className="div-item">
                      <img
                        className="feature-pic-jpg"
                        alt="Feature pic jpg"
                        src="https://anima-uploads.s3.amazonaws.com/projects/648f5b30c41da9e14e0139ec/releases/648f5d32b28ec4c8efe5b988/img/feature-pic-01-jpg@2x.png"
                      />
                      <div className="div-item-text">
                        <div className="overlap-group-2">
                          <div className="text-wrapper">ללא התחייבות</div>
                          <div className="h">
                            <p className="p">
                              פתרונות ענן בהתאמה אישית בהתאם
                              <br />
                              לאופי וצרכי הארגון
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="div-item-2">
                      <img
                        className="img"
                        alt="Feature pic jpg"
                        src="https://anima-uploads.s3.amazonaws.com/projects/648f5b30c41da9e14e0139ec/releases/648f5d32b28ec4c8efe5b988/img/feature-pic-02-jpg@2x.png"
                      />
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-3">
                          <div className="text-wrapper-2">ללא התקנה</div>
                          <div className="p-wrapper">
                            <p className="text-wrapper-3">
                              בענן שלנו אין צורך להתקין ולתחזק
                              <br />
                              חומרה ותוכנה
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="div-item-3">
                      <img
                        className="feature-pic-jpg-2"
                        alt="Feature pic jpg"
                        src="https://anima-uploads.s3.amazonaws.com/projects/648f5b30c41da9e14e0139ec/releases/648f5d32b28ec4c8efe5b988/img/feature-pic-03-jpg@2x.png"
                      />
                      <div className="div-item-text-2">
                        <div className="text-wrapper-4">ללא רכישה</div>
                        <div className="h-2">
                          <p className="text-wrapper-5">
                            אין צורך לרכוש, לנהל ולתחזק רשיונות
                            <br />
                            יקרים
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-newsflash">
                    <div className="overlap-2">
                      <div className="div-news-item">
                        <img
                          className="pic-jpg"
                          alt="Pic jpg"
                          src="https://anima-uploads.s3.amazonaws.com/projects/648f5b30c41da9e14e0139ec/releases/648f5d32b28ec4c8efe5b988/img/pic-01-jpg.png"
                        />
                        <div className="div-newsflash-2">
                          <div className="text-wrapper-6">פתרונות מחשוב מתקדמים</div>
                          <div className="p-2">
                            <p className="text-wrapper-7">
                              חברת שם חובקת מגוון רחב של פתרונות ענן לניהול ותפעול&nbsp;&nbsp;כאשר אנו
                              <br />
                              מובילים ומארחים פתרונות ענן על בסיס חודשי לעסקים בשילוב ענן מנוהל על ידי צוותי
                              <br />
                              שירות ותמיכה.
                              <br />
                              פתרונות ענן הפכו למוצר ושירות שכל אחד צורך ביום יום והשוני של וובוקס זה הידע
                              <br />
                              והיכולת לספק לנושא ניהול ושירות לקוחות מקצה לקצה על ידי צוות מהוקצע ומיומן.
                            </p>
                          </div>
                          <div className="a-btn-pink">
                            <div className="text-wrapper-8">קרא עוד</div>
                          </div>
                        </div>
                      </div>
                      <div className="div-news-item-2">
                        <img
                          className="pic-jpg-2"
                          alt="Pic jpg"
                          src="https://anima-uploads.s3.amazonaws.com/projects/648f5b30c41da9e14e0139ec/releases/648f5d32b28ec4c8efe5b988/img/pic-02-jpg.png"
                        />
                        <div className="div-newsflash-3">
                          <div className="text-wrapper-9">מרכז הידע והתמיכה</div>
                          <div className="p-3">
                            <p className="text-wrapper-10">
                              מרכז הידע והתמיכה של וובוקס, נועד לספק לך את כל הידע והכלים על מנת להפיק
                              <br />
                              את המיטב משירותי ומוצרי הענן של חברת וובוקס.
                            </p>
                          </div>
                          <div className="p-4">
                            <p className="text-wrapper-11">
                              במרכז תוכל למצוא שאלות ותשובות נפוצות עבור כל אחד מהמוצרים, מדריכים טכניים
                              <br />
                              מפורטים והורדות של תוכנות ואפליקציות נלוות.
                            </p>
                          </div>
                          <div className="a-btn-pink-wrapper">
                            <div className="a-btn-pink-2">
                              <div className="text-wrapper-12">קרא עוד</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <footer className="footer">
                    <div className="div-footer">
                      <div className="form-userform">
                        <p className="text-wrapper-13">
                          הירשם לרשימת התפוצה של מאטו וקבל מידע, טיפים והבנות ייחודיות ישירות למייל
                        </p>
                        <div className="input-email">
                          <div className="div-placeholder">
                            <div className="text-wrapper-14">דוא&#34;ל</div>
                          </div>
                        </div>
                        <div className="input-send">
                          <div className="text-wrapper-15">שלח</div>
                        </div>
                      </div>
                    </div>
                  </footer>
                  <div className="footer-text-white">
                    <div className="div-list-container">
                      <div className="div-d-flex">
                        <div className="div-d-flex-2">
                          <img
                            className="wehostlogo-png"
                            alt="Wehostlogo png"
                            src="https://anima-uploads.s3.amazonaws.com/projects/648f5b30c41da9e14e0139ec/releases/648f5d32b28ec4c8efe5b988/img/wehostlogo-png@2x.png"
                          />
                          <div className="span-fw-bold">
                            <div className="MATO">
                              <span className="span">MA</span>
                              <span className="text-wrapper-16">TO</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-copyright-text">
                          <p className="text-wrapper-17">© 2023 MATO, All rights reserved</p>
                        </div>
                      </div>
                      <div className="div-services">
                        <div className="div-first-services">
                          <div className="div-col-md-auto">
                            <div className="text-wrapper-18">צור קשר</div>
                            <div className="ul">
                              <div className="text-wrapper-19"></div>
                              <a
                                className="text-wrapper-20"
                                href="https://discord.gg/TrTTGkAGC6"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                
                              </a>
                              <a
                                className="text-wrapper-21"
                                href="matoofficial77@gmail.com"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                
                              </a>
                            </div>
                          </div>
                          <div className="div-col-md-auto-2">
                            <div className="text-wrapper-22">שירותים</div>
                            <div className="ul-2">
                              <div className="text-wrapper-23">שרתי משחק</div>
                              <div className="text-wrapper-24">שרתים וירטואלים</div>
                              <div className="text-wrapper-25">אחסון אתרים</div>
                            </div>
                          </div>
                        </div>
                        <div className="div-second-services">
                          <div className="div-col-md-auto-3">
                            <div className="text-wrapper-26">תמיכה</div>
                            <div className="ul-3">
                              <div className="text-wrapper-27">שירות לקוחות</div>
                              <div className="text-wrapper-28">תמיכה טכנית</div>
                            </div>
                          </div>
                          <div className="div-col-md-auto-4">
                            <div className="text-wrapper-29">קנייה</div>
                            <div className="ul-4">
                              <div className="text-wrapper-30">שרתי משחק</div>
                              <div className="text-wrapper-31">שרתים וירטואלים</div>
                              <div className="text-wrapper-32">אחסון אתרים</div>
                              <div className="text-wrapper-33">שרתים יעודיים</div>
                            </div>
                          </div>
                          <div className="div-col-md-auto-5">
                            <div className="text-wrapper-34">חברת מאטו</div>
                            <div className="ul-5">
                              <div className="text-wrapper-35">תמיכה</div>
                              <div className="text-wrapper-36">שירות לקוחות</div>
                              <div className="text-wrapper-37">האתר הרשמי</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-wrapper-38">למה אנחנו?</div>
                  <div className="div-row">
                    <div className="div-card-plans">
                      <div className="dt">
                        <div className="text-wrapper-39"></div>
                        <div className="text-wrapper-40">איחסון אתרים</div>
                        <div className="hr-title-line" />
                      </div>
                      <div className="dd-mb">
                        <p className="text-wrapper-41">
                          אחסון אתרי אינטרנט ברמה גבוהה
                          <br />
                          במיוחד
                          <br />
                          כולל תעבורה ללא הגבלה
                        </p>
                      </div>
                      <div className="hr" />
                      <div className="p-under-text-price">
                        <div className="overlap-group-4">
                          <div className="text-wrapper-42">החל מ10</div>
                          <div className="text-wrapper-43">/ חודשי</div>
                        </div>
                      </div>
                      <div className="a-buy-btn-plans">
                        <div className="text-wrapper-44">הזמן עכשיו</div>
                      </div>
                    </div>
                    <div className="div-card-plans-2">
                      <div className="dt-2">
                        <div className="text-wrapper-45"></div>
                        <div className="text-wrapper-46">שרתי משחק</div>
                        <div className="hr-title-line-2" />
                      </div>
                      <div className="dd-mb-2">
                        <p className="text-wrapper-47">
                          אנו מציעים שרתי משחק מהירים וחזקים
                          <br />
                          עם תפעול קל ומהיר
                        </p>
                      </div>
                      <div className="hr-2" />
                      <div className="p-under-text-price-2">
                        <div className="overlap-group-5">
                          <div className="text-wrapper-48">החל מ 10</div>
                          <div className="text-wrapper-49">/ חודשי</div>
                        </div>
                      </div>
                      <div className="a-buy-btn-plans-2">
                        <div className="text-wrapper-50">הזמן עכשיו</div>
                      </div>
                    </div>
                    <div className="div-card-plans-3">
                      <div className="dt-3">
                        <div className="text-wrapper-51"></div>
                        <div className="text-wrapper-52">שרתים וירטואלים</div>
                        <div className="hr-title-line-3" />
                      </div>
                      <div className="overlap-3">
                        <div className="dd-mb-3">
                          <p className="text-wrapper-53">
                            אנו מציעים שרתים וירטואלים חזקים
                            <br />
                            ומהירים
                          </p>
                        </div>
                        <div className="hr-3" />
                        <div className="p-under-text-price-3">
                          <div className="overlap-group-6">
                            <div className="text-wrapper-54">אחל מ15</div>
                            <div className="text-wrapper-55">/ חודשי</div>
                          </div>
                        </div>
                      </div>
                      <div className="a-buy-btn-plans-3">
                        <div className="text-wrapper-56">הזמן עכשיו</div>
                      </div>
                    </div>
                    <div className="div-card-plans-4">
                      <div className="dt-4">
                        <div className="overlap-group-7">
                          <div className="text-wrapper-57"></div>
                          <div className="text-wrapper-58"></div>
                        </div>
                        <div className="text-wrapper-59">שרתים יעודיים</div>
                        <div className="hr-title-line-4" />
                      </div>
                      <div className="overlap-4">
                        <div className="dd-mb-4">
                          <p className="text-wrapper-60">יש לנו מגוון רחב של שרתים</p>
                        </div>
                        <div className="hr-4" />
                      </div>
                      <div className="overlap-wrapper">
                        <div className="overlap-5">
                          <div className="text-wrapper-61">החל מ800</div>
                          <div className="text-wrapper-62">/ חודשי</div>
                        </div>
                      </div>
                      <div className="a-buy-btn-plans-4">
                        <div className="text-wrapper-63">הזמן עכשיו</div>
                      </div>
                    </div>
                  </div>
                  <div className="input-send-2">
                    <div className="text-wrapper-64">עוד</div>
                  </div>
                </div>
              </div>
              <div
                className="div-slider-module"
                style={{
                  backgroundImage:
                    "url(https://anima-uploads.s3.amazonaws.com/projects/648f5b30c41da9e14e0139ec/releases/648f5d32b28ec4c8efe5b988/img/div-slider-module.png)",
                }}
              >
                <div className="overlap-6">
                  <div className="div-slider-wrap">
                    <div className="div-slick-list">
                      <div className="div-slide-container">
                        <div className="div-title-hero">
                          <div className="mb">
                            <h1 className="h-1">חברת שרותי ענן הזולה בישראל!</h1>
                          </div>
                          <div className="p-5">
                            <p className="text-wrapper-65">
                              אנחנו מספקים את מיטב שירותי האיחסונים והדומיין
                              <br />
                              עבור כל צרכים שלך עם שירותי תמיכה בלתי מוגבלים ומגוון
                              <br />
                              חבילות מכול הסוגים
                              <br />
                              שמתאימים לכול אחד אז למה אתם מחכים לכו
                            </p>
                            <div className="navbar-logo-left">
                              <div className="navbar-container">
                                <div className="navbar-content">
                                  <img
                                    className="navbar-brand"
                                    alt="Navbar brand"
                                    src="https://anima-uploads.s3.amazonaws.com/projects/648f5b30c41da9e14e0139ec/releases/648f5d32b28ec4c8efe5b988/img/navbar-brand.png"
                                  />
                                  <div className="navbar-menu">
                                    <div className="navbar-link">
                                      <div className="text-wrapper-66">About</div>
                                    </div>
                                    <div className="navbar-link-2">
                                      <div className="text-wrapper-67">Features</div>
                                    </div>
                                    <div className="navbar-link-3">
                                      <div className="text-wrapper-68">Pricing</div>
                                    </div>
                                    <div className="navbar-button">
                                      <div className="text-wrapper-69">GET STARTED</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="div-btns-main">
                            <div className="a-btn">
                              <div className="text-wrapper-70">יצירת קשר</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className="slider-pic-png"
                          alt="Slider pic png"
                          src="https://anima-uploads.s3.amazonaws.com/projects/648f5b30c41da9e14e0139ec/releases/648f5d32b28ec4c8efe5b988/img/slider-pic-02-png.png"
                        />
                      </div>
                    </div>
                  </div>
                  <header className="header">
                    <div className="div-d-flex-3">
                      <div className="div-d-flex-4">
                        <img
                          className="wehostlogo-png-2"
                          alt="Wehostlogo png"
                          src="https://anima-uploads.s3.amazonaws.com/projects/648f5b30c41da9e14e0139ec/releases/648f5d32b28ec4c8efe5b988/img/wehostlogo-png-5@2x.png"
                        />
                        <div className="MATO-wrapper">
                          <div className="MATO-2">
                            <span className="text-wrapper-71">MA</span>
                            <span className="text-wrapper-72">TO</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-copyright-text-2" />
                    </div>
                    <div className="div-header">
                      <img
                        className="ul-nav"
                        alt="Ul nav"
                        src="https://anima-uploads.s3.amazonaws.com/projects/648f5b30c41da9e14e0139ec/releases/648f5d32b28ec4c8efe5b988/img/ul-nav-2.png"
                      />
                    </div>
                    <img
                      className="webox-logo-white-png"
                      alt="Webox logo white png"
                      src="https://anima-uploads.s3.amazonaws.com/projects/648f5b30c41da9e14e0139ec/releases/648f5d32b28ec4c8efe5b988/img/webox-logo-white-png-2@2x.png"
                    />
                  </header>
                </div>
                <div className="rectangle-3" />
              </div>
              <div className="section-our-plans">
                <div className="div-plans-service">
                  <div className="h-3">
                    <div className="overlap-group-8">
                      <div className="text-wrapper-73">בחרו את החבילה</div>
                      <div className="text-wrapper-74">המתאימה עבורכם</div>
                    </div>
                  </div>
                  <div className="p-lead">
                    <p className="text-wrapper-75">
                      אנו מציעים מגוון רחב של חבילות מכול הסוגים בתחום האתרים והשרתים באיכות
                    </p>
                  </div>
                </div>
                <div className="div-form-bottom">
                  <div className="form-userform-2">
                    <p className="text-wrapper-76">
                      בוא ותתקדם ביחד עם שם לתוכנות ניהול העסק בענן, ללא מאמץ ובמחירים משתלמים
                    </p>
                    <div className="overlap-7">
                      <div className="overlap-8">
                        <div className="overlap-9">
                          <div className="text-wrapper-77">צור קשר עוד היום!</div>
                          <div className="div-placeholder-2">
                            <div className="text-wrapper-78">שם</div>
                          </div>
                          <div className="text-wrapper-79">טלפון</div>
                        </div>
                        <div className="overlap-group-9">
                          <div className="input-email-2" />
                          <div className="text-wrapper-80">דוא&#34;ל</div>
                        </div>
                        <div className="text-wrapper-81">תוכן הפנייה</div>
                      </div>
                      <InputName
                        style={{
                          left: "842px",
                          position: "absolute",
                          top: "86px",
                        }}
                      />
                      <div className="input-phone" />
                      <div className="input-company" />
                    </div>
                    <div className="input" />
                    <div className="text-wrapper-82">מאשר קבלת הודעות ממאטו</div>
                    <div className="input-send-3">
                      <div className="text-wrapper-83">צרו איתי קשר</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlap-10">
              <div className="section">
                <div className="container" />
              </div>
              <div className="container-wrapper">
                <div className="container-2" />
              </div>
              <div className="new-page" />
              <div className="element-columns">
                <div className="column" />
                <div className="column-2" />
                <div className="column-3" />
              </div>
              <div className="element-columns-2">
                <div className="column-4" />
                <div className="column-5" />
              </div>
              <div className="new-page-2" />
              <div className="new-page-3" />
              <div className="new-page-4" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
