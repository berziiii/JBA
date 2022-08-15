import React from 'react';
import { observer } from 'mobx-react-lite';

import styles from './Platform.module.scss';

const ssg = require('assets/platform/ssg.png');
const bny = require('assets/platform/bny.png');
const moneyguidepro = require('assets/platform/moneyguidepro.png');
const jba = require('assets/platform/jba.png');
const morningstar = require('assets/platform/morningstar.png');
const matson = require('assets/platform/matson_money.png');
const aam = require('assets/platform/aam.png');
const ohio = require('assets/platform/ohio-national-financial-services.png');
const aef = require('assets/platform/aef.png');

const Platform = observer(() => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainWrapper}>
        <h1 className={styles.containerTitle}>Platform</h1>
        <div className={styles.contentContainer}>
          <p className={styles.quote}>"Big business security with small business service."</p>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <a href="https://www.ssginstitutional.com/" target="_blank" className={styles.cardTitle}>
                Shareholders Service Group
              </a>
              <img src={ssg} alt="Shareholders Service Group" className={styles.cardImage} />
              <p className={styles.cardContent}>
                Shareholders Service Group (SSG) provides brokerage and custodial services exclusively for independent
                registered investment advisors (RIAs). SSG uses the custody and clearing services Pershing LLC, and
                provides JBA with a full range range of brokerage, and back office service support with a robust
                technology platform and access to a full suite of investment vehicles.
              </p>
              <p className={styles.cardContent}>
                SSG's management team has a proven record of building and managing brokerage and custodial platforms.
                The team includes executives who were in charge of custodial platforms at Jack White & Company, TD
                Waterhouse and the former vice president of Advisors Technology Solutions at Charles Schwab and Company.
              </p>
            </div>
            <div className={styles.card}>
              <a href="https://www.bnymellon.com/" target="_blank" className={styles.cardTitle}>
                Pershing LLC. a subsidiary of The Bank of New York Mellon:
              </a>
              <img src={bny} alt="The Bank of New York Mellon" className={styles.cardImage} />
              <p className={styles.cardContent}>
                Shareholders Service Group (SSG) provides brokerage and custodial services exclusively for independent
                registered investment advisors (RIAs). SSG uses the custody and clearing services Pershing LLC, and
                provides JBA with a full range range of brokerage, and back office service support with a robust
                technology platform and access to a full suite of investment vehicles.
              </p>
              <p className={styles.cardContent}>
                Client accounts held at Pershing/BNY are protected up to $1 billion for securities and $1.9 cash
                awaiting investment. This is the highest asset protection in the industry, for more information{' '}
                <a
                  href="https://standardfiles.pershing.com/media/Pershing-Protection-of-Client-AssetsFAQs.pdf"
                  target="_blank">
                  click here
                </a>
                . JBA has direct access to Pershing's Bond Inventory and the firm's fixed income trading expertise.
                Pershing and AAM (see below) assist in the custom construction of income portfolios for JBA Clients.
                Clients have secure access to their accounts 24/7 via Pershing’s NETXInvestor web site. To take a tour
                of Pershing's Brokerage Accounts,{' '}
                <a href="http://www2.netxselect.com/minidemo/Demo.html" target="_blank">
                  click here.
                </a>
              </p>
            </div>
            <div className={styles.card}>
              <a href="https://www.moneyguidepro.com/ifa/" target="_blank" className={styles.cardTitle}>
                MoneyGuidePro
              </a>
              <img src={moneyguidepro} alt="MoneyGuidePro" className={styles.cardImage} />
              <p className={styles.cardContent}>
                JBA maintains a licensing agreement with PIEtech, for the use of their award winning financial planning
                software, MoneyGuidePro (MGP). We utilize MGP, to help clients define their financial goals, track
                progress to those goals, stress test their portfolios, and bring to light issues concerning estate
                taxes, long term care needs, and life and disability insurance needs.
              </p>
              <p className={styles.cardContent}>
                MGP's sophisticated software produces understandable written and interactive web based financial plans
                and statements. Monte Carlo Theory Simulations are used to stress test clients' portfolios. To see how
                return variability impacts your investment account click here to play MGP's Monte Carlo Card Game.
              </p>
              <p className={styles.cardContent}>
                Clients can securely obtain a view of their net worth, asset allocation, and financial plan. MGP uses
                account aggregation services to provide our clients with a comprehensive portfolio view of assets and
                liabilities held within their financial accounts. This utility creates a living financial plan and puts
                an up to date financial picture at our client’s finger tips 24/7.
              </p>
            </div>
            <div className={styles.card}>
              <a href="http://jbafinancialadvisors.com/" target="_blank" className={styles.cardTitle}>
                JBA Financial Advisors
              </a>
              <img src={jba} alt="JBA Financial Advisors" className={styles.cardImage} />
              <p className={styles.cardContent}>
                JBA's principal, John Berzellini, working with other investment advisors and brokers provide clients
                with investment and cash management service. John primarily works with Blackrock, State Street Global
                Advisors, Vanguard and AAM to provide investment services. JBA offers strategic asset allocation ETF
                portfolios and custom designed income portfolios. Cash management services are provided thru SSG and
                Pershing/BNY Mellon Brokerage Operations.
              </p>
            </div>
            <div className={styles.card}>
              <a href="https://www.morningstar.com/" target="_blank" className={styles.cardTitle}>
                Morningstar Investment Services
              </a>
              <img src={morningstar} alt="Morningstar Investment Services" className={styles.cardImage} />
              <p className={styles.cardContent}>
                Morningstar Investment Services Inc. (MIS) is an investment advisor affiliated with of one of the
                industry's largest mutual fund research firms, Morningstar. The research firm is famous for its Five
                Star Mutual Fund Rating System.
              </p>
              <p className={styles.cardContent}>
                At the retail level, JBA offers clients MIS's Managed Account Portfolios and ETF Portfolios. Charles
                Schwab provides custodial services for these portfolios. (For more information{' '}
                <a href="https://mp.morningstar.com/" target="_blank">
                  click here
                </a>
                )
              </p>
              <p className={styles.cardContent}>
                At the institutional level, JBA partners with MIS to deliver an advisory-driven, open architecture,
                401(k) plan. JBA provides plan servicing and participant education. Morningstar, acting as the plan's
                co-fiduciary, provides investment management services.
              </p>
            </div>
            <div className={styles.card}>
              <a href="https://www.matsonmoney.com/" target="_blank" className={styles.cardTitle}>
                Matson Money/Dimensional Fund Advisors
              </a>
              <img src={matson} alt="Matson Money/Dimensional Fund Advisors" className={styles.cardImage} />
              <p className={styles.cardContent}>
                John Berzellini was first introduced to Mark Matson in 2004 by Lincoln Financial Securities Corporation.
                Since that time, John, and now JBA offers clients access to Dimensional Fund Advisors (DFA) thru the
                investment advisor, Matson Money. Charles Schwab provides custodial services for these portfolios.
              </p>
              <p className={styles.cardContent}>
                Matson Money's portfolios are supported by a proprietary investor education program. JBA is a licensed
                presenter of the program, which strives to create investor "peace of mind" by explaining how markets
                work. For information on Dimensional Fund Advisors{' '}
                <a href="https://us.dimensional.com/" target="_blank">
                  click here
                </a>
                .
              </p>
            </div>
            <div className={styles.card}>
              <a href="https://www.aamlive.com/publicsite/aamhome" target="_blank" className={styles.cardTitle}>
                Advisor Asset Management
              </a>
              <img src={aam} alt="Advisor Asset Management" className={styles.cardImage} />
              <p className={styles.cardContent}>
                Advisor Asset Management (AAM) assists in designing JBA Custom Income Portfolios. John Berzellini was
                introduced to AAM's fixed income capabilities by Lincoln Financial Securities Corporation and has
                continued that relationship with his firm.
              </p>
              <p className={styles.cardContent}>
                AAM, formerly Fixed Income Securities, has been deeply rooted in the fixed income markets for almost 30
                years. The firm provides JBA with unlimited access to bond markets, proprietary unit investment trusts,
                as well as efficient trading support. Custodial services for JBA's Income portfolios are provided by
                Pershing LLC(see above).
              </p>
            </div>
            <div className={styles.card}>
              <a href="https://www.ohionational.com/sites/public/" target="_blank" className={styles.cardTitle}>
                Ohio National Financial Services
              </a>
              <img src={ohio} alt="Ohio National Financial Services" className={styles.cardImage} />
              <p className={styles.cardContent}>
                John Berzellini is a general agent of Ohio National Life Insurance Company. Ohio National is a
                prestigious insurance company domiciled in Cincinnati offering whole life insurance and other
                traditional fixed insurance products. JBA makes use of Ohio Nationals fixed line of insurance products.
              </p>
              <p className={styles.cardContent}>
                In addition to his general agency relationship with Ohio National, John maintains direct relationships
                with other prestigious life insurance companies and insurance brokers.
              </p>
              <p className={styles.cardContent}>
                JBA makes use of John’s access to insurance industry experts in individual and business planning
                engagements. Insurance company expertise is particularly useful in the area of estate and business
                planning.
              </p>
              <p className={styles.cardContent}>
                We believe insurances products such as life insurance, disability insurance, long term care insurance
                and annuities are an integral part of our comprehensive financial planning platform.
              </p>
            </div>
            <div className={styles.card}>
              <a href="https://www.aefonline.org/" target="_blank" className={styles.cardTitle}>
                Donor Advised Funds
              </a>
              <img src={aef} alt="Donor Advised Funds" className={styles.cardImage} />
              <p className={styles.cardContent}>
                JBA works with the American Endowment Foundation (AEF), an independent sponsor of Donor Advised Funds.
                AEF enables clients to design and conduct their charitable activities effectively and efficiently as
                possible.
              </p>
              <p className={styles.cardContent}>
                Many donor advised fund programs are simply charitable arms of for-profit financial institutions. We
                fully agree with the AEF assertion that true independence improves reliability and enhances the
                flexibility of a Donor Advised Fund Program. Be sure to view their video.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Platform;
