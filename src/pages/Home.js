import React from 'react';
import Header from '../shared/Header';
import BannerHeading from '../components/BannerHeading';
import LeftCategoryMenus from '../components/LeftCategoryMenus';
import LeftBestSellingMenus from '../components/LeftBestSellingMenus';
import LeftBestFormFarmers from '../components/LeftBestFormFarmers';
import PorductCard from '../components/PorductCard';
import { Link } from 'react-router-dom';
import HomeBlogSection from '../components/HomeBlogSection';
import Footer from '../shared/Footer';

const Home = () => {
  return (
    <>
      <div className="main__wrapper">
        <Header />
          <main className="main-content">
            <div className="container">
              {/* Top Banner section */}
              <section className="banner__section">
                  <div className="banner__section__left__side">
                    <LeftCategoryMenus />
                  </div>
                  <div className="banner__section__right__side">
                    <BannerHeading />
                  </div>
              </section>

              {/* Best Selling Section */}
              <section className="best__selling__section">
                  <div className="best__selling__section__left__side">
                    <LeftBestSellingMenus />
                  </div>
                  <div className="best__selling__section__right__side">
                    <div className="products-area">
                      <PorductCard limit="3" />
                    </div>
                  </div>
              </section>
              

              {/*  Best From Farmers Section */}
              <section className="form__farmers__section">
                  <div className="form__farmers__section__left__side">
                    <LeftBestFormFarmers />
                  </div>
                  <div className="form__farmers__section__right__side">
                    <div className="products-area">
                      <PorductCard limit="3" />
                      </div>
                  </div>
              </section>

              {/* Section Headline */}
              <section className="section__headline">
                <div className="headline-heading">
                  <h3>Section Headline</h3>
                  <Link to="/">Link <span className="material-icons">chevron_right</span></Link>
                </div>
                <div className="headline__products">
                  <PorductCard limit="4" />
                </div>
              </section>

              {/* Home Blog Section */}
              <section className="home__blog_section">
                <HomeBlogSection />
              </section>
            </div>
          </main>
        <Footer />
      </div>
    </>
  )
};

export default Home;
