import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>Hakkımızda</h1>
      <hr />
      <Link className='linkAbout' to='employee'>Çalışanlar Hakkında</Link>
      <Link className='linkAbout' to='company' >Şirket Hakkında</Link>

      {/* neden linklerdeki to kısmında empliyeee ve company başına slah oymadık eğer / koyarsak bu işarei bir kök olarak düşünür ve tanımlanmayam bir notfoundpage sayfasına atar bizim bu iki linkmizde children . Parent olmadığı için başına slash koyamayız */}
      
      
      
      
      <Outlet/>  
       {/* eğer bu sayfaya <Outlet/> kodunu eklemezsek sayfa bağlanmaz çalışmaz bu çok öenmli- import edildi mi montrol et*/}




    </div>
  )
}

export default About