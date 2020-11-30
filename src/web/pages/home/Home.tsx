import React from "react";
import Slider from "react-slick";
import {Observer} from "mobx-react";
import {Modal} from "antd";
import {PlayCircleFilled, HomeFilled, MailFilled, PhoneFilled} from "@ant-design/icons";
import {BaseComponent} from "../../components/BaseComponent";
import {HomeProps, HomeState} from "./HomeInterface";
import {AppMode} from "../../../web/utils/Constants";

import close from "assets/home/close.svg";
import resumePicture from "assets/home/resume.jpg";

import styles from "./Home.module.scss";

export class Home<P extends HomeProps = HomeProps, S extends HomeState = HomeState> extends BaseComponent {
  state: HomeState = {
    videoModalVisible: false,
    resumeModalVisible: false,
  };

  constructor(props: HomeProps) {
    super(props);
  }

  componentDidMount() {
    this.navigateToHash();
  }

  handleResumeClose = () => {
    this.setState({resumeModalVisible: false});
  };

  handleResumeOpen = () => {
    this.setState({resumeModalVisible: true});
  };

  navigateToHash = () => {
    setTimeout(() => {
      const id = window.location.hash.split("#")[1];
      if (id) {
        const element = document.getElementById(id);
        if (element) window.scrollTo(0, element.offsetTop - 60);
      }
    }, 250);
  };

  slider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };

    return (
      <div className={styles.sliderContainer}>
        <div className={styles.sliderWrapper}>
          <Slider {...settings}>
            <div className={styles.sliderCard}>
              <p>Do you have a retirement income plan or a retirement savings plan?</p>
            </div>
            <div className={styles.sliderCard}>
              <p>Do you know how retirement income streams work?</p>
            </div>
            <div className={styles.sliderCard}>
              <p>Would it be ok for you to run out of money in retirement?</p>
            </div>
            <div className={styles.sliderCard}>
              <p>Do you want the peace of mind of a secure retirement income?</p>
            </div>
          </Slider>
        </div>
      </div>
    );
  };

  handleOpenVideoModal = () => {
    this.setState({
      videoModalVisible: true,
    });
  };
  handleCloseVideoModal = () => {
    const videoPlayer: any = document.getElementById("videoPlayer");
    videoPlayer?.setAttribute("src", videoPlayer.src);
    this.setState({
      videoModalVisible: false,
    });
  };

  videoModal = () => {
    const {state, appStore} = this;
    const closeIcon = (
      <div className={styles.modalClose} role={"button"} tabIndex={0} onClick={this.handleCloseVideoModal} onKeyPress={e => this.handleOnEnter(e, this.handleCloseVideoModal)}>
        <img src={close} className={styles.closeIcon} alt={"close icon"} />
      </div>
    );
    return (
      <Modal className={styles.videoModal} maskClosable={false} closeIcon={closeIcon} visible={state.videoModalVisible} footer={null} onCancel={this.handleCloseVideoModal}>
        <div className={styles.videoContainer}>
          <iframe
            src="https://player.vimeo.com/video/369838909"
            id={"videoPlayer"}
            title={"Retirement Savings Dilemma"}
            allow="fullscreen"
            allowFullScreen
            frameBorder="0"
            width={appStore.state.mode === AppMode.Desktop ? 700 : 450}
            height={appStore.state.mode === AppMode.Desktop ? 400 : 225}
            scrolling="no"
          />
        </div>
      </Modal>
    );
  };

  resumeModal = () => {
    const {state} = this;
    const closeIcon = (
      <div className={styles.modalClose} role={"button"} tabIndex={0} onClick={this.handleResumeClose} onKeyPress={e => this.handleOnEnter(e, this.handleResumeClose)}>
        <img src={close} className={styles.closeIcon} alt={"close icon"} />
      </div>
    );
    return (
      <Modal className={styles.resumeModal} maskClosable={false} closeIcon={closeIcon} visible={state.resumeModalVisible} footer={null} onCancel={this.handleResumeClose}>
        <div className={styles.resumeModalContainer}>
          <h3 className={styles.resumeTitle}>John Berzellini, CFP®, CLU, CPA</h3>
          <img src={resumePicture} className={styles.resumeImage} alt={"resume"} />
          <div className={styles.resumeContentContainer}>
            <p className={styles.resumeContent}>
              John's background in taxation (which includes an eight year tenure as IRS agent), brings unique perspective on financial planning not easily found in the marketplace today. As a highly competent financial advisor, he provides
              personalized consultations that help clients build and preserve wealth. Clients benefit from his broad knowledge of tax and accounting and his extensive experience in advising individuals, company executives and business
              owners on financial and retirement issues.
            </p>
            <p className={styles.resumeContent}>
              As principal of JBA Financial Advisors (JBA); John provides clients with an objective and comprehensive approach to financial planning. In his capacity as principal, John also provides supervisory services to individuals and
              businesses offering financial planning services through the JBA Advisory Platform.
            </p>
            <p className={styles.resumeContent}>
              John Berzellini started his professional career as an Assistant Director of Economic Research at the Chamber of Commerce of Metropolitan Baltimore. He began to specialize professional growth in the areas of accounting and
              taxation gaining firsthand knowledge of tax laws and how they are enforced by working as an auditor for the Comptroller’s of Maryland and as a IRS agent.
            </p>
            <p className={styles.resumeContent}>
              John began with the IRS in a split-group of Income Tax Agents and Gift and Estate Attorneys, progressed to an assignment in Technical Review Staff, and then to responsibility for coordination of audit activities of Review
              Agents in income tax examinations of small- to midsized businesses. While there, he taught review agent training, as well as accounting at Essex Community College.
            </p>
            <p className={styles.resumeContent}>
              In 1993, John began to re-focus his extensive background in tax and accounting on advising individuals, company executives and business owners on financial and retirement planning issues. He is experienced in agent sales with
              Minnesota Mutual Life Insurance and Securities, AXA Advisors, LLC, and the Equitable Life Assurance Society of the U.S., and was an Advanced Underwriter with Summit Financial Group, Inc.
            </p>
            <p className={styles.resumeContent}>
              In July 2003, John became a registered representative of Jefferson Pilot Securities Corporation (JSPC) and in July 2004, he became an Investment Advisor Representative of the firm. JPSC was acquired by Lincoln Financial on
              July 1, 2008. John continued on with Lincoln as an Investment Advisor Representative until completing his transition to an independent investment advisor.
            </p>
            <p className={styles.resumeContent}>
              In July, 2007, JB Advisory Services was established to provide for-fee financial consulting services. At that time, money management services were offered through Lincoln Financial Securities Corporation. John completed his
              transition to an Independent Investment Advisor in July, 2010. At that time, the firm's name was changed to JBA Financial Advisors and clients' account custody arrangements were established with SSG Institutional, clearing
              through Pershing, LLC, a subsidiary of the Bank of New York Mellon.
            </p>
            <p className={styles.resumeContent}>In June, 2012, John was appointed as a general agent of Ohio National Life Insurance Company and merged his life insurance practice with JBA Financial Advisors.</p>
            <div className={styles.licenseContainer}>
              <h5 className={styles.licenseTitle}>Licenses</h5>
              <ul className={styles.licenseList}>
                <li className={styles.licenseItem}>Registered Investment Advisor</li>
                <li className={styles.licenseItem}>
                  Financial Industry Regulatory Agency (FINRA) <span>Financial Industry Regulatory Agency (FINRA) Successfully completed the FINRA sponsored Series 7, Series 6, Series 63, Series 65 examinations.</span>
                </li>
                <li className={styles.licenseItem}>Maryland Health and Life Insurance License</li>
                <li className={styles.licenseItem}>Certified Public Accountant (CPA)</li>
              </ul>
            </div>
            <div className={styles.certsContainer}>
              <h5 className={styles.certsTitle}>Certifications</h5>
              <ul className={styles.certsList}>
                <li className={styles.certsItem}>Certified Financial Planner, (CFP®)</li>
                <li className={styles.certsItem}>Certified Life Underwriter, (CLU)</li>
              </ul>
            </div>
            <div className={styles.affiliateContainer}>
              <h5 className={styles.affiliateTitle}>Professional Affiliations</h5>
              <ul className={styles.affiliateList}>
                <li className={styles.affiliateItem}>Member, Financial Planning Association</li>
                <li className={styles.affiliateItem}>Member, American Institute of Certified Public Accountants</li>
              </ul>
            </div>
            <div className={styles.educationContainer}>
              <h5 className={styles.educationTitle}>Education</h5>
              <p className={styles.educationContent}>Bachelors: Towson University, Maryland</p>
              <p className={styles.educationContent}>Major areas of study: Economics, Business Administration</p>
            </div>
          </div>
        </div>
      </Modal>
    );
  };

  render() {
    return (
      <Observer>
        {() => (
          <div className={styles.wrapper}>
            <div className={styles.heroWrapper}>
              <div className={styles.heroMask}>
                <h1 className={styles.heroTitle}>Start Building Your Guaranteed Pension Today!</h1>
                <button className={styles.videoCtaContainer} onClick={this.handleOpenVideoModal}>
                  <PlayCircleFilled className={styles.playIcon} />
                </button>
              </div>
            </div>
            <div id={"what-we-do"} className={styles.mainContainer}>
              <h2 className={styles.containerTitle}>What We Do</h2>
              {this.slider()}
              <div className={styles.contentContainer}>
                <p className={styles.quote}>"Our most successful clients choose our comprehensive planning service."</p>
                <div className={styles.cardsRow}>
                  <div className={styles.card}>
                    <h5 className={styles.cardTitle}>Financial Plans</h5>
                    <p className={styles.cardContent}>
                      We will review your current financial situation, including retirement goals, insurance programs, investment portfolios, estate planning issues, and develop a comprehensive plan based on your needs and wants. You will
                      receive a written financial plan with recommendations and a financial consultation. Our plans are completely portable, and can be implemented either by you or any advisor of your choosing. Depending on the complexity,
                      our financial plans range in cost from $500 to $3,500
                    </p>
                  </div>
                  <div className={styles.card}>
                    <h5 className={styles.cardTitle}>Financial Consulting</h5>
                    <p className={styles.cardContent}>
                      A consultation can explain or help clarify a specific financial issue, a financial product, or a financial process. Many times our consultations are used to obtain a second opinion on a suggested course of action.
                      Sometimes acting on free investment or tax advice without knowing all the facts can be dangerous to your financial health. With JBA, you can depend on factual financial information and expert insights on issues
                      applicable to your unique financial situation. All consultations are delivered under a fiduciary client relationship. Our hourly rate for an Individual Financial Consultation is $150.
                    </p>
                  </div>
                  <div className={styles.card}>
                    <h5 className={styles.cardTitle}>Comprehensive Financial Planning</h5>
                    <p className={styles.cardContent}>Comprehensive Financial Planning Services is our premier offering. Services include:</p>
                    <ul className={styles.cardList}>
                      <li>Ongoing Money Management Services (see below)</li>
                      <li>Financial Plans</li>
                      <li>Financial Consulting</li>
                    </ul>
                    <p className={styles.cardContent}>
                      In addition to ongoing Financial Consulting, clients have internet access to MoneyGuidePro's award winning financial planning software and Cash Edge's account aggregation software. Your Financial Plan and Financial
                      Statements are always up to date, and available to you 24/7. This holistic approach combined with the resources of our strategic alliances, the tax and planning expertise of JBA, investor education programs, and
                      state-of-the-art technology pulls our clients' financial lives together.
                    </p>
                    <table className={styles.cardTable}>
                      <tr>
                        <th>Assets</th>
                        <th>Per Year</th>
                      </tr>
                      <tr>
                        <td>First $1,000,000</td>
                        <td>1.00%</td>
                      </tr>
                      <tr>
                        <td>Next $4,000,000</td>
                        <td>0.75%</td>
                      </tr>
                      <tr>
                        <td>Next $10,000,000</td>
                        <td>0.50%</td>
                      </tr>
                      <tr>
                        <td>Over $15,000,000</td>
                        <td>Negotiable</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className={styles.cardRowLong}>
                  <div className={styles.card}>
                    <h5 className={styles.cardTitle}>Ongoing Money Management</h5>
                    <div className={styles.cardRow}>
                      <div className={styles.cardColumn}>
                        <p className={styles.cardSubTitle}>JBA Investment and Cash Management Services:</p>
                        <p className={`${styles.cardSubContent} ${styles.subTitle}`}>JBA Strategic Asset Allocation Portfolios and JBA's Income Accounts.</p>
                        <p className={styles.cardSubContent}>
                          In addition to JBA’s proprietary investments and cash management services, we offer standalone referral investment programs. These investment programs are made available thru our agreements with third party asset
                          managers (other independent investment advisors). Equity Portfolios use various Exchange Traded Fund (ETF) strategies to build broadly diversified portfolios which are monitored and rebalanced on an ongoing basis.
                          Income Accounts are custom designed to meet a client's unique income needs. JBA teams up with Advisors Asset Management and other investment advisors to acquire and manage income producing investments. Income
                          accounts are monitored on an ongoing basis. Cash management services such as checking, electronic transfers and bill paying are offered in conjunction with Shareholders Services Group and Pershing LLC. JBA Money
                          Management Services fee is .50% of assets under management. This fee is incorporated in the above Comprehensive Planning Fee Schedule. JBA Portfolios are offered exclusively to Comprehensive Financial Planning
                          clients and clients with over $5M in JBA Referral Investment Programs.
                        </p>
                      </div>
                      <div className={styles.cardColumn}>
                        <p className={styles.cardSubTitle}>JBA Referral Investment Programs:</p>
                        <p className={`${styles.cardSubContent} ${styles.subTitle}`}>Matson Money's Strategic Asset Allocation Program.</p>
                        <p className={styles.cardSubContent}>
                          JBA services and supports this program with Mark Matson's Investor Education Series. Matson Money uses Dimensional Fund Advisors' (DFA) structured asset class strategies to build broadly diversified portfolios
                          which are monitored and rebalance on an ongoing basis.
                        </p>
                        <p className={`${styles.cardSubContent} ${styles.subTitle}`}>Morningstar Investment Services' (MIS) Core and Explore ETF Portfolios, and Strategic Allocation Managed Account Portfolios.</p>
                        <p className={styles.cardSubContent}>
                          MIS is the investment advisor of the Morningstar Research Company. The research company is well known for its 5-Star Mutual Fund Rating System. MIS monitors and rebalances these portfolios on an ongoing basis.
                        </p>
                        <p className={`${styles.cardSubContent} ${styles.subTitle}`}>Advisor Asset Management Income Portfolios</p>
                        <p className={styles.cardSubContent}>
                          JBA offer AAM’s income portfolios as part of a comprehensive income strategy or a stand alone retirement income solution. AAM, with over 30 years of experience, has its roots in the fixed income market place. The
                          firms provide investment services through investment advisors, and act as the bond desk for broker dealers. Referral Investment Program fees are 1% for equity portfolios and 1/2% for fixed income portfolios.
                          Minimum Investment – Matson Money $25,000, MIS $100,000, AAM $500,000. Referral Investment Programs are offered with or without our Comprehensive Financial Planning Services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.businessSolutionsContentContainer}>
                  <h5 className={styles.businessSolutionsTitle}>Specialized Business Solutions</h5>
                  <p className={styles.businessSolutionsContent}>
                    JBA offers business consultations to small-and medium-sized enterprises. John Berzellini, a former IRS Agent, designs tax-wise strategies for closely held businesses in the following areas:
                  </p>
                  <ul className={styles.businessSolutionsList}>
                    <li>Key Person Life Insurance and Executive Benefits</li>
                    <li>Buy-Sell Agreements</li>
                    <li>Non-Qualified Deferred Compensation Plans</li>
                    <li>Salary Continuation Plans</li>
                    <li>Corporate Long-Term Care Plans</li>
                  </ul>
                  <p className={styles.businessSolutionsContent}>
                    In addition to his own experiences in auditing, taxation and finance, John draws on the experiences of other finance and insurance industry experts to bring cutting edge solutions to business owners in the area of
                    executive benefits. We are well versed in the products and techniques used in the specialized areas of planning listed above, and offer our individual comprehensive financial planning services as an executive benefit.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div id={"who-we-are"} className={`${styles.mainContainer} ${styles.darkContainer}`}>
              <h2 className={styles.containerTitle}>Who We Are</h2>
              <div className={styles.contentContainer}>
                <p className={styles.whoWeAreContent}>
                  JBA is a registered investment advisor offering individuals and businesses:
                  <ul className={styles.whoWeAreList}>
                    <li>Financial Consulting</li>
                    <li>Financial Plans</li>
                    <li>Money Management Services</li>
                    <li>Ongoing Comprehensive Financial Planning Services</li>
                  </ul>
                </p>
                <p className={styles.whoWeAreContent}>
                  JBA's financial planning process, investment programs, technology, educational programs and experience earn the confidence of the firm's clients. We believe this confidence, together with our history of integrity and
                  quality service, is instrumental to the financial success of our clients.
                </p>
                <p className={styles.whoWeAreContent}>
                  With over 30 years of experience in financial services, taxation, and education, JBA's Principal, John Berzellini, has amassed an impressive local and national network of credentialed professionals and industry
                  relationships to bring to bear on our client's unique financial goals and circumstances.
                </p>
              </div>
              <div className={styles.resumeContainer} role={"button"} tabIndex={0} onClick={this.handleResumeOpen} onKeyPress={e => this.handleOnEnter(e, this.handleResumeOpen)}>
                <div className={styles.resumeMask}>
                  <p>Click for Resume</p>
                </div>
              </div>
            </div>
            <div id={"why-choose-us"} className={styles.mainContainer}>
              <h2 className={styles.containerTitle}>Why Choose Us?</h2>
              <p className={styles.quote}>"Our unique approach to financial planning helps clients find money they may be transferring to financial institutions unknowingly and unnecessarily."</p>
              <div className={`${styles.cardsRow} ${styles.whyChooseUsRow}`}>
                <div className={styles.card}>
                  <h5 className={styles.cardTitle}>Independence</h5>
                  <p className={styles.cardContent}>
                    OUR CLIENTS COME FIRST! No faceless committees overriding what is in the client's best interest. JBA offers clients a fiduciary-based relationship, as opposed to the transactional-based, suitability relationship offered
                    by many registered representatives of banks, insurance companies, and brokerage firms.
                  </p>
                </div>
                <div className={styles.card}>
                  <h5 className={styles.cardTitle}>Reliable Tax Planning</h5>
                  <p className={styles.cardContent}>
                    JBA's principal, John Berzellini, understands the procedural and technical aspects of tax administration. During his tenure as a IRS Agent, John worked in a combined income tax and estate tax examination group, was a
                    member of the agency's technical review staff, and a IRS Classroom Instructor.
                  </p>
                </div>
                <div className={styles.card}>
                  <h5 className={styles.cardTitle}>Honesty & Transparency</h5>
                  <p className={styles.cardContent}>JBA is an independent investment advisor; there are no disclosures or fine print to the contrary on our web site or business cards.</p>
                </div>
                <div className={styles.card}>
                  <h5 className={styles.cardTitle}>Integrity & Experience</h5>
                  <p className={styles.cardContent}>JBA's Principal, John Berzellini, is known in government, the professional community and the financial services industry for fair play and technical expertise.</p>
                </div>
                <div className={styles.card}>
                  <h5 className={styles.cardTitle}>Security</h5>
                  <p className={styles.cardContent}>
                    JBA Client Accounts have the HIGHEST LEVEL of ASSET PROTECTION in the securities industry today. Pershing, LLC, a subsidiary of the Bank of New York Mellon, provides custodial services and enhanced asset protection for
                    JBA Accounts.
                  </p>
                </div>
                <div className={styles.card}>
                  <h5 className={styles.cardTitle}>Service & Delivery</h5>
                  <p className={styles.cardContent}>
                    JBA has adopted the CFP® Board of Standard's Six Step Planning Process and the Board's Fiduciary Standard of care. John Berzellini is active in the CFP® Board's Financial Planning Outreach Program.
                  </p>
                </div>
                <div className={styles.card}>
                  <h5 className={styles.cardTitle}>Fair & Competitive Pricing</h5>
                  <p className={styles.cardContent}>
                    <span>Flexibility of Relationship</span> – Clients can choose Ongoing Comprehensive Financial Planning Service or engage JBA for the stand alone services of Money Management, Financial Consulting, or a Written Financial
                    Plan.{" "}
                  </p>
                  <p className={styles.cardContent}>
                    <span>Pricing</span> – Stand-alone services are priced to be competitive in today's market place. We apply a fee offset for advisory fees received from the Matson Money, Morningstar Investment Services and Advisors Asset
                    Management investment programs to our minimum quarterly planning fee. At the minimum investment level, our comprehensive planning fee is only 1/4% higher than the average mutual fund expense ratio. At investment levels
                    of $800,000 or greater, our comprehensive financial planning service is the best value in the Baltimore-Washington Metropolitan Area.
                  </p>
                </div>
                <div className={styles.card}>
                  <h5 className={styles.cardTitle}>Tech"know"logy</h5>
                  <p className={styles.cardContent}>
                    Clients have access to MoneyGuidePro's goal oriented financial planning software 24/7. Cash Edge Software populates financial plans with live account data from all client accounts no matter where those accounts are held.
                    This functionality provides JBA clients with an up-to-date holistic view of their financial situation. JBA Financial works with Net2Sky, LLC, to ensure safety and security in both its local computer networks and
                    electronic communications.
                  </p>
                </div>
              </div>
            </div>
            <div id={"contact-us"} className={`${styles.mainContainer} ${styles.darkContainer}`}>
              <h2 className={styles.containerTitle}>Contact Us</h2>
              <div className={styles.contentContainer}>
                <div className={styles.contentWrapper}>
                  <div className={styles.contactContainer}>
                    <div className={styles.location}>
                      <HomeFilled />
                      <p>30 E. Padonia Road</p>
                      <p>Suite 301</p>
                      <p>Timonium, MD 21093</p>
                    </div>
                    <div className={styles.address}>
                      <MailFilled />
                      <p>JBA Financial Advisors</p>
                      <p>P.O. Box 6146</p>
                      <p>Timonium, MD 21094</p>
                    </div>
                    <div className={styles.phone}>
                      <PhoneFilled />
                      <a href={"tel:410-584-1491"}>410.584.1491</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {this.videoModal()}
            {this.resumeModal()}
          </div>
        )}
      </Observer>
    );
  }
}
