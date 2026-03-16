import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { ICONS, Industries } from '../utils/constants';

function Stat({num, label}){
  return (
    <div style={{textAlign:'center'}}>
      <div style={{fontSize:32,fontWeight:800,color:'#ffc107'}}>{num}</div>
      <div style={{color:'rgba(255,255,255,0.9)',fontWeight:300}}>{label}</div>
    </div>
  )
}

export default function Home(){
  return (
    <div>
      <section style={{background:'#fafafa',padding:'72px 0'}}>
        <div className="container" style={{textAlign:'center'}}>
          <h1 style={{fontSize:42,margin:0,lineHeight:1.05}}>Your trusted partner in
            <br/>talent solutions.</h1>
          <p style={{color:'#6b7280',maxWidth:720,margin:'18px auto'}}>Evolution Management Services connects top multilingual talent with leading organizations across India. Based in New Delhi, we specialize in building teams that drive success.</p>
          <div style={{display:'flex',gap:16,justifyContent:'center',marginTop:18}}>
            <Link to="/job-seekers" style={{textDecoration:'none'}}><button className="btn-primary">Find your next role</button></Link>
            <Link to="/employers" style={{textDecoration:'none'}}><button className="btn-outline">Hire talent</button></Link>
          </div>
        </div>
      </section>

      <section style={{background:'#032b53',color:'#fff',padding:'28px 0'}}>
        <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <Stat num={`15+`} label="Years of Excellence" />
          <Stat num={`15000+`} label="Placements Made" />
          <Stat num={`200+`} label="Corporate Clients" />
          <Stat num={`20`} label="Industries Served" />
        </div>
      </section>

      <section id="services" style={{padding:'48px 0'}}>
        <div className="container" style={{textAlign:'center'}}>
          <h2>Our Services</h2>
          <p style={{color:'#6b7280'}}>Comprehensive HR solutions designed to meet your business needs.</p>

          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:16,marginTop:24}}>
            <div className="snapshot-card" style={{textAlign:'left'}}>
              <div className='icon-wrapper'><img src={ICONS.userGroup} alt="Recruitment" style={{width:'100%',height:'auto',borderRadius:6}} /></div>
              <div style={{fontWeight:700}}>Recruitment & Staffing</div>
              <p style={{color:'#6b7280'}}>End-to-end talent acquisition across IT, Banking, Retail, and Hospitality sectors.</p>
            </div>
            <div className="snapshot-card" style={{textAlign:'left'}}>
              <div className='icon-wrapper'><img src={ICONS.building} alt="HR Consulting" style={{width:'100%',height:'auto',borderRadius:6}} /></div>
              <div style={{fontWeight:700}}>HR Consulting</div>
              <p style={{color:'#6b7280'}}>Strategic HR solutions tailored to your organization's unique needs.</p>
            </div>
            <div className="snapshot-card" style={{textAlign:'left'}}>
              <div className='icon-wrapper' style={{padding: "9px"}}><img src={ICONS.security} alt="Security Services" style={{width:'100%',height:'auto',borderRadius:6}} /></div>
              <div style={{fontWeight:700}}>Security Services</div>
              <p style={{color:'#6b7280'}}>Professional security personnel and management for businesses.</p>
            </div>
          </div>

          <div style={{marginTop:18}}>
            <Link to="/services" style={{textDecoration:'none'}}><button className="btn-outline">View all services</button></Link>
          </div>
        </div>
      </section>

      <section style={{background:'#fbf6ee',padding:'36px 0'}}>
        <div className="container" style={{textAlign:'center'}}>
          <h3 style={{margin:0, fontWeight:700, fontSize:'2.25rem'}}>Industries We Serve</h3>
          <p style={{color:'#6b7280'}}>Specialized recruitment expertise across key sectors</p>

          <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap',marginTop:18}}>
            {['IT & technology','Banking & Finance','Retail','Security'].map((t)=> (
              <div key={t} style={{background:'#fff', borderRadius:6,padding:8, boxShadow:'0 1px 0 rgba(16,24,40,0.03)', minWidth:200, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', border: '1px solid #BEBEBE'}}>
              <img src={Industries[t]} alt={t} style={{width:20, height:20}} />
              <div style={{fontWeight:700, color:'#082b51', marginTop:6}}>{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'48px 0'}}>
        <div className="container">
          <div style={{background:'#082b51',color:'#fff',borderRadius:12,padding:36,textAlign:'center'}}>
            <h2 style={{margin:0, color:'rgba(255,255,255,0.9)',fontWeight:700, fontSize:'2rem'}}>Ready to Transform your Workforce?</h2>
            <p style={{color:'rgba(255,255,255,0.9)'}}>Whether you're looking for your next career opportunity or seeking top talent for your organization, we're here to help.</p>
            <div style={{marginTop:12}}>
              <Link to="/contact" style={{textDecoration:'none'}}><button style={{background: '#ffffff', borderRadius: '16px', color: '#000', fontSize: '1rem', padding: '12px 24px', fontWeight:600, border:'none', cursor:'pointer'}}>Contact us Today</button></Link>
            </div>
          </div>
        </div>
      </section>

      <Footer dark />
    </div>
  )
}
