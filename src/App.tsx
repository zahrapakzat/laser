import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    type: '',
    message: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://formspree.io/f/mgvyaadq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'waitingpakzat1@gmail.com',
          subject: 'درخواست مشاوره جدید'
        }),
      });

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: 'پیام شما با موفقیت ارسال شد. کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.'
        });
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('خطا در ارسال پیام');
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'متأسفانه در ارسال پیام مشکلی پیش آمده است. لطفاً دوباره تلاش کنید.'
      });
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCall = () => {
    window.location.href = 'tel:02155617445';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/989123262503', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:waitingpakzat1@gmail.com';
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/laserentezar', '_blank');
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            لیزر انتظار <span className="spark-icon" style={{marginRight: '8px'}}>⚡</span>
          </div>
          <div className="nav-links">
            <a href="#services">خدمات ما</a>
            <a href="#materials">متریال‌ها</a>
            <a href="/portfolio" target="_blank" rel="noopener noreferrer">نمونه کارها</a>
            <a href="#pricing">تعرفه خدمات</a>
            <a href="#faq">سوالات متداول</a>
            <a href="#contact">تماس با ما</a>
          </div>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="container">
          <h1>لیزر انتظار - خدمات حرفه‌ای برش و حکاکی</h1>
          <p>با بیش از ۱۰ سال تجربه در زمینه برش و حکاکی لیزری، پروژه‌های شما را با بالاترین کیفیت و دقت اجرا می‌کنیم. استفاده از پیشرفته‌ترین دستگاه‌های لیزر CNC برای بهترین نتیجه</p>
          <button className="cta-button" onClick={handleCall}>درخواست مشاوره رایگان</button>
        </div>
      </section>

      <section className="features" id="services">
        <div className="container">
          <h2>خدمات تخصصی ما</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>برش لیزری</h3>
              <p>برش دقیق و حرفه‌ای انواع متریال‌ها با دقت 0.01 میلی‌متر. مناسب برای تولید قطعات صنعتی، تزئینی و تبلیغاتی</p>
              <ul>
                <li>برش چوب و MDF با ضخامت تا ۲۰ میلی‌متر</li>
                <li>برش اکریلیک و پلکسی با ضخامت تا ۱۵ میلی‌متر</li>
                <li>برش چرم و پارچه با دقت بالا</li>
                <li>برش فوم و یونولیت با ضخامت تا ۱۰ سانتی‌متر</li>
                <li>برش پلکسی رنگی و شیشه‌ای</li>
              </ul>
            </div>
            <div className="feature-card">
              <h3>حکاکی لیزری</h3>
              <p>حکاکی طرح‌های پیچیده و لوگو روی سطوح مختلف با کیفیت فوق‌العاده و جزئیات دقیق</p>
              <ul>
                <li>حکاکی روی چوب با عمق متغیر</li>
                <li>حکاکی روی فوم با جزئیات دقیق</li>
                <li>حکاکی روی شیشه و آینه</li>
                <li>حکاکی روی چرم و پارچه</li>
                <li>حکاکی لوگو و متن روی پلکسی</li>
              </ul>
            </div>
            <div className="feature-card">
              <h3>طراحی و مشاوره</h3>
              <p>مشاوره تخصصی و طراحی فایل برای پروژه‌های شما توسط تیم متخصص ما</p>
              <ul>
                <li>طراحی فایل‌های CAD و Vector</li>
                <li>بهینه‌سازی طرح‌ها برای برش لیزری</li>
                <li>مشاوره انتخاب متریال مناسب</li>
                <li>پشتیبانی فنی و راهنمایی</li>
                <li>طراحی اختصاصی برای پروژه‌های خاص</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="materials" id="materials">
        <div className="container">
          <h2>متریال‌های قابل برش و حکاکی</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>چوب و MDF</h3>
              <p>برش و حکاکی انواع چوب طبیعی و MDF با ضخامت تا ۲۰ میلی‌متر</p>
              <ul>
                <li>چوب طبیعی</li>
                <li>MDF</li>
                <li>نئوپان</li>
                <li>تخته سه لایه</li>
              </ul>
            </div>
            <div className="feature-card">
              <h3>اکریلیک و پلکسی</h3>
              <p>برش و حکاکی اکریلیک و پلکسی با ضخامت تا ۱۵ میلی‌متر</p>
              <ul>
                <li>پلکسی شفاف</li>
                <li>پلکسی رنگی</li>
                <li>پلکسی مات</li>
                <li>پلکسی آینه‌ای</li>
              </ul>
            </div>
            <div className="feature-card">
              <h3>فوم و یونولیت</h3>
              <p>برش و حکاکی انواع فوم و یونولیت با ضخامت تا ۱۰ سانتی‌متر</p>
              <ul>
                <li>فوم معمولی</li>
                <li>فوم سخت</li>
                <li>یونولیت</li>
                <li>فوم پلی اتیلن</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing" id="pricing">
        <div className="container">
          <h2>تعرفه خدمات</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>پکیج پایه</h3>
              <p>مناسب برای پروژه‌های کوچک و شخصی</p>
              <ul>
                <li>سایز حداکثر: 50x50 سانتی‌متر</li>
                <li>زمان تحویل: 24 ساعت</li>
                <li>پشتیبانی: تلفنی</li>
                <li>طراحی ساده</li>
                <li>قیمت‌گذاری بر اساس متر مربع</li>
              </ul>
            </div>
            <div className="feature-card">
              <h3>پکیج حرفه‌ای</h3>
              <p>مناسب برای کسب و کارها و تولیدات متوسط</p>
              <ul>
                <li>سایز حداکثر: 100x100 سانتی‌متر</li>
                <li>زمان تحویل: 48 ساعت</li>
                <li>پشتیبانی: تلفنی و حضوری</li>
                <li>طراحی پیشرفته</li>
                <li>تخفیف برای سفارشات عمده</li>
                <li>قیمت‌گذاری ویژه برای مشتریان دائمی</li>
              </ul>
            </div>
            <div className="feature-card">
              <h3>پکیج سفارشی</h3>
              <p>مناسب برای پروژه‌های خاص و تولیدات انبوه</p>
              <ul>
                <li>سایز نامحدود</li>
                <li>زمان تحویل: توافقی</li>
                <li>پشتیبانی: اختصاصی</li>
                <li>طراحی سفارشی</li>
                <li>قیمت‌گذاری ویژه</li>
                <li>گارانتی کیفیت</li>
                <li>تخفیف ویژه برای سفارشات انبوه</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="container">
          <h2>سوالات متداول</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>نحوه سفارش</h3>
              <p>برای ثبت سفارش می‌توانید از طریق تماس تلفنی، واتساپ یا مراجعه حضوری به دفتر ما اقدام کنید. کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت و راهنمایی‌های لازم را ارائه می‌دهند.</p>
            </div>
            <div className="feature-card">
              <h3>زمان تحویل</h3>
              <p>زمان تحویل بسته به حجم و پیچیدگی پروژه متفاوت است. پروژه‌های ساده در 24 ساعت و پروژه‌های پیچیده در 48 ساعت تحویل داده می‌شوند. برای پروژه‌های خاص، زمان تحویل به صورت توافقی تعیین می‌شود.</p>
            </div>
            <div className="feature-card">
              <h3>هزینه خدمات</h3>
              <p>هزینه خدمات بر اساس متریال، ابعاد و پیچیدگی طرح محاسبه می‌شود. برای دریافت قیمت دقیق، لطفاً با ما تماس بگیرید یا به دفتر ما مراجعه کنید. تخفیف‌های ویژه برای سفارشات عمده در نظر گرفته شده است.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="consultation" id="consultation">
        <div className="container">
          <h2>درخواست مشاوره رایگان</h2>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
            <button className="consultation-main-btn" onClick={openModal}>
              درخواست مشاوره رایگان
            </button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <h2>درخواست مشاوره رایگان</h2>
            <form className="consultation-form" onSubmit={handleSubmit}>
              <h3>فرم درخواست مشاوره</h3>
              <div className="form-group">
                <label htmlFor="name">نام و نام خانوادگی</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="نام خود را وارد کنید" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">شماره تماس</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="شماره تماس خود را وارد کنید" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">ایمیل</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="ایمیل خود را وارد کنید" required />
              </div>
              <div className="form-group">
                <label htmlFor="service">نوع خدمات مورد نظر</label>
                <select id="service" name="service" value={formData.service} onChange={handleInputChange} required>
                  <option value="">انتخاب نوع خدمات</option>
                  <option value="cutting">برش لیزری چوب و MDF</option>
                  <option value="engraving">حکاکی لیزری</option>
                  <option value="foam">برش و حکاکی فوم</option>
                  <option value="acrylic">برش و حکاکی پلکسی</option>
                  <option value="design">طراحی و مشاوره</option>
                  <option value="other">سایر خدمات</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">توضیحات پروژه</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="توضیحات پروژه خود را وارد کنید" required />
              </div>
              <button type="submit" className="submit-button">ارسال درخواست مشاوره</button>
              {formStatus.message && (
                <div className={`form-message ${formStatus.type}`}>{formStatus.message}</div>
              )}
            </form>
          </div>
        </div>
      )}

      <section className="contact" id="contact">
        <div className="container">
          <h2>تماس با ما</h2>
          <div className="contact-info">
            <p>📍 آدرس: تهران، خیابان پانزده خرداد، منوچهر خانی، سرای بهرامی، لیزر انتظار</p>
            <p>📞 تلفن: <a href="tel:02155617445" onClick={handleCall}>۰۲۱۵۵۶۱۷۴۴۵</a></p>
            <p>📱 موبایل: <a href="tel:09123262503" onClick={handleWhatsApp}>۰۹۱۲۳۲۶۲۵۰۳</a></p>
            <p>✉️ ایمیل: <a href="mailto:waitingpakzat1@gmail.com" onClick={handleEmail}>waitingpakzat1@gmail.com</a></p>
            <p>⏰ ساعات کاری: شنبه تا پنجشنبه ۹ صبح تا ۶ عصر</p>
            <p>🌐 اینستاگرام: <a href="https://instagram.com/laserentezar" onClick={handleInstagram}>@laserentezar</a></p>
          </div>
        </div>
      </section>

      <div className="floating-call-button" onClick={handleCall}>
        <span>📞</span>
      </div>

      <footer className="footer">
        <div className="container">
          <p>تمامی حقوق محفوظ است © ۱۴۰۳ | لیزر انتظار</p>
          <p>طراحی و توسعه با ❤️ در ایران</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
