import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer';

emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');

function ContactForm(){
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessageStatus('');

    try {
      await emailjs.send('service_evolution', 'template_contact', {
        to_email: 'dummy.mail@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message
      });

      setMessageStatus('✅ Message sent successfully! We will get back to you within 24 hours.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setMessageStatus('❌ Error sending message. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{background:'#fff',border:'1px solid #e5e7eb',borderRadius:12,padding:32}}>
      <h3 style={{margin:'0 0 8px',fontSize:20,fontWeight:700}}>Send a message</h3>
      <p style={{color:'#6b7280',margin:'0 0 24px',fontSize:'0.9rem'}}>Fill out the form and our team will get back to you within 24 hours.</p>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:16}}>
        <div>
          <label style={{display:'block',color:'#082b51',fontWeight:600,marginBottom:6,fontSize:'0.9rem'}}>Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{width:'100%',padding:'10px 12px',border:'1px solid #d1d5db',borderRadius:6,fontSize:'0.95rem',boxSizing:'border-box'}}
          />
        </div>
        <div>
          <label style={{display:'block',color:'#082b51',fontWeight:600,marginBottom:6,fontSize:'0.9rem'}}>Phone *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{width:'100%',padding:'10px 12px',border:'1px solid #d1d5db',borderRadius:6,fontSize:'0.95rem',boxSizing:'border-box'}}
          />
        </div>
        <div>
          <label style={{display:'block',color:'#082b51',fontWeight:600,marginBottom:6,fontSize:'0.9rem'}}>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{width:'100%',padding:'10px 12px',border:'1px solid #d1d5db',borderRadius:6,fontSize:'0.95rem',boxSizing:'border-box'}}
          />
        </div>
        <div>
          <label style={{display:'block',color:'#082b51',fontWeight:600,marginBottom:6,fontSize:'0.9rem'}}>Subject *</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={{width:'100%',padding:'10px 12px',border:'1px solid #d1d5db',borderRadius:6,fontSize:'0.95rem',boxSizing:'border-box'}}
          />
        </div>
      </div>

      <div style={{marginBottom:20}}>
        <label style={{display:'block',color:'#082b51',fontWeight:600,marginBottom:6,fontSize:'0.9rem'}}>Message *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
          style={{width:'100%',padding:'10px 12px',border:'1px solid #d1d5db',borderRadius:6,fontSize:'0.95rem',boxSizing:'border-box',fontFamily:'inherit'}}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{width:'100%',padding:'12px 16px',background:'#082b51',color:'#fff',border:'none',borderRadius:6,fontWeight:700,fontSize:'1rem',cursor:loading ? 'not-allowed' : 'pointer',opacity:loading ? 0.7 : 1}}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      {messageStatus && (
        <div style={{marginTop:12,padding:12,borderRadius:6,textAlign:'center',background:messageStatus.includes('✅') ? '#d1fae5' : '#fee2e2',color:messageStatus.includes('✅') ? '#065f46' : '#991b1b'}}>
          {messageStatus}
        </div>
      )}
    </form>
  );
}

export default function Contact(){
  return (
    <div>
      <section style={{background:'#fff8f0',padding:'56px 0',textAlign:'center'}}>
        <div className="container">
          <h1 style={{fontSize:42,margin:0,lineHeight:1.05}}>Contact Us</h1>
          <p style={{color:'#6b7280',maxWidth:720,margin:'18px auto'}}>Have questions? We'd love to hear from you. Get in touch with our team.</p>
        </div>
      </section>

      <section style={{padding:'48px 0'}}>
        <div className="container" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:48,alignItems:'start'}}>
          <div style={{display:'flex',flexDirection:'column',gap:24}}>
            <h2 style={{fontSize:28,fontWeight:700,margin:0}}>Get in Touch</h2>

            <div style={{display:'flex',gap:12,alignItems:'flex-start'}}>
              <div style={{background:'#ffebc0',borderRadius:8,padding:12,width:60,height:60,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.5rem',flexShrink:0}}>📞</div>
              <div>
                <div style={{fontWeight:700,marginBottom:4}}>Our Office</div>
                <div style={{color:'#6b7280',fontSize:'0.9rem',lineHeight:1.5}}>South Delhi<br/>New Delhi, India 11000</div>
              </div>
            </div>

            <div style={{display:'flex',gap:12,alignItems:'flex-start'}}>
              <div style={{background:'#ffebc0',borderRadius:8,padding:12,width:60,height:60,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.5rem',flexShrink:0}}>📱</div>
              <div>
                <div style={{fontWeight:700,marginBottom:4}}>Phone</div>
                <div style={{color:'#6b7280',fontSize:'0.9rem',lineHeight:1.5}}>+91 98765 43210<br/>+91 11 2345 6789</div>
              </div>
            </div>

            <div style={{display:'flex',gap:12,alignItems:'flex-start'}}>
              <div style={{background:'#ffebc0',borderRadius:8,padding:12,width:60,height:60,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.5rem',flexShrink:0}}>📧</div>
              <div>
                <div style={{fontWeight:700,marginBottom:4}}>E-mail</div>
                <div style={{color:'#6b7280',fontSize:'0.9rem',lineHeight:1.5}}>info@evolutionms.com<br/>careers@evolutionms.com</div>
              </div>
            </div>

            <div style={{display:'flex',gap:12,alignItems:'flex-start'}}>
              <div style={{background:'#ffebc0',borderRadius:8,padding:12,width:60,height:60,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.5rem',flexShrink:0}}>🕐</div>
              <div>
                <div style={{fontWeight:700,marginBottom:4}}>Business Hours</div>
                <div style={{color:'#6b7280',fontSize:'0.9rem',lineHeight:1.5}}>Monday – Friday: 9:00 AM – 6:00 PM<br/>Saturday: 10:00 AM – 2:00 PM</div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section style={{padding:'36px 0',background:'#fff3e0'}}>
        <div className="container">
          <div style={{height:220,borderRadius:16,background:'#fff8e5',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',border:'1px solid #ffebc0'}}>
            <div style={{fontSize:48,marginBottom:12}}>📍</div>
            <div style={{textAlign:'center'}}>
              <div style={{fontWeight:700,fontSize:20,color:'#082b51'}}>South Delhi,</div>
              <div style={{fontWeight:700,fontSize:20,color:'#082b51'}}>Newdelhi</div>
            </div>
          </div>
        </div>
      </section>

      <Footer dark />
    </div>
  )
}
