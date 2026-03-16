import React from 'react';
import Footer from '../components/Footer';

const values = [
  {
    icon: '🎯',
    title: 'Excellence',
    text: 'We strive for excellence in every placement, ensuring the perfect match between talent and opportunity.'
  },
  {
    icon: '💼',
    title: 'Transparency',
    text: 'Transparency and honesty form the foundation of all our relationships with clients and candidates.'
  },
  {
    icon: '✅',
    title: 'Quality',
    text: 'We maintain rigorous standards in candidate screening to deliver only the best talent.'
  },
  {
    icon: '🔄',
    title: 'Adaptation',
    text: 'We continuously adapt our methods to meet the evolving needs of the recruitment landscape.'
  }
];

const whyChooseUs = [
  '15+ years of industry experience',
  'Deep understanding of local market dynamics',
  'Extensive multilingual candidate network',
  'Personalized approach to every engagement',
  'End-to-end recruitment support'
];

export default function About(){
  return (
    <div>
      <section style={{padding:'72px 0 64px',background:'linear-gradient(90deg,#fff8f0,#fff)'}}>
        <div className="container" style={{textAlign:'center'}}>
          <h1 style={{fontSize:42,margin:0,lineHeight:1.05}}>About Evolution</h1>
          <p style={{color:'#6b7280',maxWidth:720,margin:'18px auto'}}>A legacy of excellence in human resource management and talent placement</p>
        </div>
      </section>

      <section style={{padding:'48px 0'}}>
        <div className="container" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:48,alignItems:'start'}}>
          <div>
            <h3 style={{fontSize:28,fontWeight:700,margin:'0 0 18px'}}>Our Story</h3>
            <p style={{color:'#6b7280',lineHeight:1.6,marginBottom:16}}>Evolution Management Services Pvt. Ltd. was established in New Delhi with a vision to transform the recruitment landscape in India. What began as a small placement firm has grown into a trusted name in HR consulting and staffing solutions.</p>
            <p style={{color:'#6b7280',lineHeight:1.6,marginBottom:16}}>Based in South Delhi, we have built strong relationships with leading organizations across multiple sectors, including IT, Banking, Retail, and Hospitality. Our focus on understanding both client requirements and candidate aspirations sets us apart.</p>
            <p style={{color:'#6b7280',lineHeight:1.6}}>We take pride in our specialization in placing multilingual Indian candidates, helping businesses build diverse and capable teams that drive growth and innovation.</p>
          </div>
          <div style={{background: '#FFF7E6',height: '90%', borderRadius: '16px', padding: '16px', paddingTop:'32px'}}>
            <h3 style={{fontSize:28,fontWeight:700,margin:'0 0 18px'}}>Why Choose Us?</h3>
            <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:12}}>
              {whyChooseUs.map((item)=> (
                <li key={item} style={{display:'flex',gap:12,alignItems:'flex-start',color:'#6b7280',lineHeight:1.6}}>
                  <span style={{width:6,height:6,borderRadius:'50%',background:'#e9a616',marginTop:8,flexShrink:0}} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section style={{background:'linear-gradient(90deg,#fff2dd,#fff)',padding:'48px 0'}}>
        <div className="container" style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:18}}>
          <div style={{background:'#fff',borderRadius:12,padding:24,boxShadow:'0 1px 2px rgba(0,0,0,0.05)'}}>
            <h2>Our Mission</h2>
            <p style={{color:'#6b7280',lineHeight:1.6,margin:0}}>To bridge the gap between exceptional talent and outstanding opportunities, creating lasting partnerships that foster growth for both individuals and organizations across India.</p>
          </div>
          <div style={{background:'#fff',borderRadius:12,padding:24,boxShadow:'0 1px 2px rgba(0,0,0,0.05)'}}>
            <h2>Our Vision</h2>
            <p style={{color:'#6b7280',lineHeight:1.6,margin:0}}>To be the most trusted HR partner in India, recognized for our commitment to quality, integrity, and the success of every placement we make.</p>
          </div>
        </div>
      </section>

      <section style={{padding:'48px 0'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:18}}>
            {values.map((item)=> (
              <div key={item.title} style={{background:'#fff',borderRadius:12,padding:22,boxShadow:'0 1px 2px rgba(0,0,0,0.05)',textAlign:'center',minHeight:180,display:'flex',flexDirection:'column',gap:12,alignItems:'center',justifyContent:'center'}}>
                <div style={{width:50,height:50,borderRadius:14,background:'rgba(233,166,22,0.18)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.8rem'}}>{item.icon}</div>
                <h4 style={{margin:0,fontWeight:700,fontSize:'1rem'}}>{item.title}</h4>
                <p style={{color:'#6b7280',fontSize:'0.9rem',lineHeight:1.5,margin:0}}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer dark />
    </div>
  )
}
