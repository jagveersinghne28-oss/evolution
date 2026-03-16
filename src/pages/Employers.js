import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer';

emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');

function Feature({icon,title,children}){
  return (
    <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:8,textAlign:'center',maxWidth:180}}>
      <div style={{background:'#fff3e0',borderRadius:50,padding:12,fontSize:'2rem'}}>{icon}</div>
      <div style={{fontWeight:700}}>{title}</div>
      <div style={{color:'#6b7280',fontSize:14}}>{children}</div>
    </div>
  )
}

function HiringForm(){
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    industry: '',
    numberOfPositions: '',
    jobRequirements: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await emailjs.send('service_evolution', 'template_hiring', {
        to_email: 'dummy.mail@gmail.com',
        company_name: formData.companyName,
        contact_person: formData.contactPerson,
        from_email: formData.email,
        phone: formData.phone,
        industry: formData.industry,
        number_of_positions: formData.numberOfPositions,
        job_requirements: formData.jobRequirements
      });

      setMessage('✅ Hiring request submitted successfully! We will contact you within 24 hours.');
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        industry: '',
        numberOfPositions: '',
        jobRequirements: ''
      });
    } catch (error) {
      setMessage('❌ Error submitting request. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{background:'#fff',border:'1px solid #e5e7eb',borderRadius:12,padding:32,maxWidth:720,margin:'0 auto'}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:16}}>
        <div>
          <label style={{display:'block',color:'#082b51',fontWeight:600,marginBottom:6,fontSize:'0.9rem'}}>Company Name *</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            style={{width:'100%',padding:'10px 12px',border:'1px solid #d1d5db',borderRadius:6,fontSize:'0.95rem',boxSizing:'border-box'}}
          />
        </div>
        <div>
          <label style={{display:'block',color:'#082b51',fontWeight:600,marginBottom:6,fontSize:'0.9rem'}}>Contact Person *</label>
          <input
            type="text"
            name="contactPerson"
            value={formData.contactPerson}
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
          <label style={{display:'block',color:'#082b51',fontWeight:600,marginBottom:6,fontSize:'0.9rem'}}>Industry *</label>
          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            required
            style={{width:'100%',padding:'10px 12px',border:'1px solid #d1d5db',borderRadius:6,fontSize:'0.95rem',boxSizing:'border-box'}}
          />
        </div>
        <div>
          <label style={{display:'block',color:'#082b51',fontWeight:600,marginBottom:6,fontSize:'0.9rem'}}>Number of Positions *</label>
          <input
            type="number"
            name="numberOfPositions"
            value={formData.numberOfPositions}
            onChange={handleChange}
            required
            style={{width:'100%',padding:'10px 12px',border:'1px solid #d1d5db',borderRadius:6,fontSize:'0.95rem',boxSizing:'border-box'}}
          />
        </div>
      </div>

      <div style={{marginBottom:20}}>
        <label style={{display:'block',color:'#082b51',fontWeight:600,marginBottom:6,fontSize:'0.9rem'}}>Job Requirements *</label>
        <textarea
          name="jobRequirements"
          value={formData.jobRequirements}
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
        {loading ? 'Submitting...' : 'Submit Request'}
      </button>

      {message && (
        <div style={{marginTop:12,padding:12,borderRadius:6,textAlign:'center',background:message.includes('✅') ? '#d1fae5' : '#fee2e2',color:message.includes('✅') ? '#065f46' : '#991b1b'}}>
          {message}
        </div>
      )}
    </form>
  );
}

export default function Employers(){
  return (
    <div>
      <section style={{background:'#fff8f0',padding:'56px 0',textAlign:'center'}}>
        <div className="container">
          <h1 style={{fontSize:42,margin:0,lineHeight:1.05}}>Hire Top Talent</h1>
          <p style={{color:'#6b7280',maxWidth:720,margin:'18px auto'}}>Partner with Evolution Management Services to build high-performing teams that drive your business forward</p>
        </div>
      </section>

      <section style={{padding:'40px 0'}}>
        <div className="container" style={{display:'flex',gap:24,flexWrap:'wrap',justifyContent:'center'}}>
          <Feature icon="🎯" title="Targeted Matching">We understand your requirements and deliver candidates who fit your culture and needs.</Feature>
          <Feature icon="⏱️" title="Fast Turnaround">Our extensive network enables quick placement without compromising on quality.</Feature>
          <Feature icon="✅" title="Quality Assurance">Rigorous screening ensures only qualified candidates reach your desk.</Feature>
          <Feature icon="🗣️" title="Multilingual Talent">Access to a diverse pool of multilingual candidates across India.</Feature>
        </div>
      </section>

      <section style={{background:'#fbf6ee',padding:'48px 0',textAlign:'center'}}>
        <div className="container">
          <h2 style={{fontSize:32,margin:'0 0 8px'}}>Service Packages</h2>
          <p style={{color:'#6b7280',margin:0}}>Flexible staffing solutions designed to meet your unique business needs.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:18,marginTop:24}}>
            <div style={{background:'#fff',padding:20,borderRadius:12,boxShadow:'0 1px 2px rgba(0,0,0,0.05)'}}>
              <h4 style={{margin:'0 0 8px',fontWeight:700}}>Executive Search</h4>
              <p style={{color:'#6b7280',fontSize:'0.9rem',margin:0}}>High-level placements for senior management and leadership roles.</p>
            </div>
            <div style={{background:'#fff',padding:20,borderRadius:12,boxShadow:'0 1px 2px rgba(0,0,0,0.05)'}}>
              <h4 style={{margin:'0 0 8px',fontWeight:700}}>Permanent Staffing</h4>
              <p style={{color:'#6b7280',fontSize:'0.9rem',margin:0}}>Full-time placements for all levels and departments.</p>
            </div>
            <div style={{background:'#fff',padding:20,borderRadius:12,boxShadow:'0 1px 2px rgba(0,0,0,0.05)'}}>
              <h4 style={{margin:'0 0 8px',fontWeight:700}}>Contract Staffing</h4>
              <p style={{color:'#6b7280',fontSize:'0.9rem',margin:0}}>Flexible temporary workforce solutions for projects.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding:'48px 0'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:24}}>
            <h2 style={{fontSize:32,margin:'0 0 8px'}}>Submit a Hiring Request</h2>
            <p style={{color:'#6b7280',margin:0}}>Tell us about your requirements and we'll get back to you within 24 hours</p>
          </div>
          <HiringForm />
        </div>
      </section>

      <Footer dark />
    </div>
  )
}
