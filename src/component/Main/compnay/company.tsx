// import dependency
import {type JSX} from 'react'

// import component
import CompanyItem from '../companyItem'

export default function Company():JSX.Element {
  return (
    <section className='flex justify-center flex-wrap gap-5 py-10 lg:justify-between'>
      <CompanyItem img="/images/svg/company-logo1.svg" alt="amazoon" />
      <CompanyItem img="/images/svg/company-logo2.svg" alt="" />
      <CompanyItem img="/images/svg/company-logo3.svg" alt="hubspot" />
      <CompanyItem img="/images/svg/company-logo4.svg" alt="notion" />
      <CompanyItem img="/images/svg/company-logo5.svg" alt=" eflix" />
      <CompanyItem img="/images/svg/company-logo6.svg" alt="zoom" />
    </section>
  )
}
