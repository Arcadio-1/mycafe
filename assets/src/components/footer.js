export const renderFooter = () => {
  const footer = document.querySelector("footer");
  footer.innerHTML = `
          <div class="container">
        <div class="footer-icons-area">
          <div class="f-icon">
            <img src="./assets/src/image/footer/icon/delevry.png" alt="" />
            <h5>ارسال رایگان</h5>
          </div>
          <div class="f-icon">
            <img src="./assets/src/image/footer/icon/7days.png" alt="" />
            <h5>7 روز گارانتی برگشت</h5>
          </div>
          <div class="f-icon">
            <img src="./assets/src/image/footer/icon/sup.png" alt="" />
            <h5>پاسخگویی 24 ساعته</h5>
          </div>
          <div class="f-icon">
            <img src="./assets/src/image/footer/icon/orginal1.png" alt="" />
            <h5>ضمانت اصالت کالا</h5>
          </div>
          <div class="f-icon">
            <img src="./assets/src/image/footer/icon/soft4.png" alt="" />
            <h5>آموزش رایگان</h5>
          </div>
        </div>
        <div class="footer-down">
          <div class="phone-adress">
            <img src="./assets/src/image/footer/contact-us.png" alt="" />
            <span>
              <span class="mrg-l1em"><span class="gray">021-</span>31501</span>
              <span><span class="gray">021-</span>37629953</span>
            </span>
            <p>09359931501</p>
            <p>پشتیبانی <span class="clr-blu">تلفنی</span> روز های کاری</p>
            <p>ساعت 9 الی 17</p>
            <p>info@cafetarane.com</p>
            <p>تهران - بلوار ارشاد - مهندس(پیام) - پلاک 12</p>
          </div>
          <div class="handi-link">
            <strong>لینک کاربردی</strong>
            <ul>
              <li>راهنما خرید</li>
              <li>پیگیری سفارش</li>
              <li>سوالات متداول</li>
              <li>قوانین و مقررات</li>
              <li>مقالات آموزشی</li>
            </ul>
          </div>
          <div class="log-social">
            <strong>حساب کاربری</strong>
            <ul>
              <li>عضویت</li>
              <li>ورود</li>
              <li>فراموشی رمز ورود</li>
            </ul>
            <strong class="mg-t1">ما در شبکه های اجتماعی</strong>
            <ul class="inline-ul">
              <li>
                <a href="">
                  <img src="./assets/src/image/footer/social/fb.png" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="./assets/src/image/footer/social/twt.png" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="./assets/src/image/footer/social/wp.png" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="./assets/src/image/footer/social/insta.png"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
          <div class="f-bg"></div>
        </div>
      </div>
    `;
};
