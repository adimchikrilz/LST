import { useGetAllProductsQuery } from '../../services/products';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useState } from 'react';
import styles from './HomePage.module.css';
import Furniturelarge from '../../assets/furniture-large1.png';
import Furnitureright from '../../assets/furniture-small11.png';
import Furnituresmall1 from '../../assets/furniture-small22.png';
import Furnituresmall2 from '../../assets/furniture-small3.png';

//The Best Services
import Easy1 from '../../assets/easy-icon1.png';
import Easy2 from '../../assets/easy-icon2.png';
import Easy3 from '../../assets/easy-icon3.png';

//Featured Posts
import PostA from '../../assets/Post1.jpg';
import PostB from '../../assets/post2.jpg';
import PostC from '../../assets/post3.jpg';

//Testimonies
import Testimony1 from '../../assets/testimony1.png';
import Testimony2 from '../../assets/testimonial1.jpg';
import Testimony3 from '../../assets/testimonial2.jpg';
import Testimony4 from '../../assets/testimonial3.jpg';
import Testimony5 from '../../assets/testimonial4.jpg';
import Testimony6 from '../../assets/testimonial5.jpg';
import Testimony7 from '../../assets/testimonial6.jpg';
import Testimony8 from '../../assets/testimonial7.jpg';
import Testimony9 from '../../assets/testimonial8.jpg';
import Testimony10 from '../../assets/testimonial9.jpg';



const HomePage = () => {
  const { data: products = { products: [] }, isLoading } = useGetAllProductsQuery();
  const [showMore, setShowMore] = useState(false);

  if (isLoading) return <div className={styles.loading}>Loading...</div>;

  // Display up to 8 products initially (2 rows of 4)
  const initialProducts = products.products.slice(0, 8);
  const additionalProducts = products.products.slice(8, 16); // Next 8 products

  return (
    <div className={styles.homePage}>
      <div className={styles.container}>
        {/* Furniture Categories Section */}
        <section className={styles.furnitureSection}>
          <div className={styles.furnitureGrid}>
            {/* Large furniture card on the left */}
            <div className={styles.furnitureCardLarge}>
              <img src={Furniturelarge} alt="Furniture" className={styles.furnitureImage} />
              <div className={styles.furnitureOverlay}>
                <span className={styles.itemCount}>5 Items</span>
                <h3 className={styles.furnitureTitles}>FURNITURE</h3>
                <button className={styles.readMoreBtn}>Read More</button>
              </div>
            </div>
            
            {/* Right side with smaller cards */}
            <div className={styles.furnitureRight}>
              {/* Top card */}
              <div className={styles.furnitureCardSmall}>
                <img src={Furnitureright} alt="Furniture" className={styles.furnitureImage} />
                <div className={styles.furnitureOverlay}>
                  <span className={styles.itemCount}>5 Items</span>
                  <h3 className={styles.furnitureTitle}>FURNITURE</h3>
                  <button className={styles.readMoreBtn}>Read More</button>
                </div>
              </div>
              
              {/* Bottom row with two cards */}
              <div className={styles.furnitureBottom}>
                <div className={styles.furnitureCardSmall}>
                  <img src={Furnituresmall1} alt="Furniture" className={styles.furnitureImage} />
                  <div className={styles.furnitureOverlay}>
                    <span className={styles.itemCount}>5 Items</span>
                    <h3 className={styles.furnitureTitle}>FURNITURE</h3>
                    <button className={styles.readMoreBtn}>Read More</button>
                  </div>
                </div>
                
                <div className={styles.furnitureCardSmall}>
                  <img src={Furnituresmall2} alt="Furniture" className={styles.furnitureImage} />
                  <div className={styles.furnitureOverlay}>
                    <span className={styles.itemCount}>5 Items</span>
                    <h3 className={styles.furnitureTitle}>FURNITURE</h3>
                    <button className={styles.readMoreBtn}>Read More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: BESTSELLER PRODUCTS */}
        <section className={styles.bestsellerSection} id="bestseller">
          <div className={styles.sectionHeader}>
            <h4 className={styles.sectionSubtitle}>Featured Products</h4>
            <h2 className={styles.sectionTitle}>BESTSELLER PRODUCTS</h2>
            <p className={styles.sectionDescription}>Problems trying to resolve the conflict between</p>
          </div>
          
          <div className={styles.bestsellerGrid}>
            {initialProducts.map((product) => (
              <ProductCard key={product.id} product={product} showAddToCart={false} />
            ))}
          </div>
          
          {!showMore && (
            <div className={styles.buttonContainer}>
              <button className={styles.loadMoreBtn} onClick={() => setShowMore(true)}>
                LOAD MORE PRODUCTS
              </button>
            </div>
          )}
          
          {showMore && (
            <>
              <div className={styles.bestsellerGrid}>
                {additionalProducts.map((product) => (
                  <ProductCard key={product.id} product={product} showAddToCart={false} />
                ))}
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.loadMoreBtn} onClick={() => setShowMore(false)}>
                  SHOW LESS PRODUCTS
                </button>
              </div>
            </>
          )}
        </section>

        {/* Section 2: THE BEST SERVICES */}
        <section className={styles.bestServices} id="services">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionSubtitle}>Featured Products</p>
            <h2 className={styles.sectionTitle}>THE BEST SERVICES</h2>
            <p className={styles.sectionDescription}>Problems trying to resolve the conflict between</p>
          </div>
          
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
              <img src={Easy1} alt="Furniture" className={styles.easyImage} />
              </div>
              <h3 className={styles.serviceTitle}>Easy Wins</h3>
              <p className={styles.serviceDescription}>Get your best looking smile now!</p>
            </div>
            
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
              <img src={Easy2} alt="Furniture" className={styles.easyImage} />
              </div>
              <h3 className={styles.serviceTitle}>Concrete</h3>
              <p className={styles.serviceDescription}>Defalcate is most focused in helping you discover your most beautiful smile</p>
            </div>
            
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
              <img src={Easy3} alt="Furniture" className={styles.easyImage} />
              </div>
              <h3 className={styles.serviceTitle}>Hack Growth</h3>
              <p className={styles.serviceDescription}>Overcame any hurdle or any other problem.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Featured Posts */}
        <section className={styles.featuredPosts} id="posts">
        <div className={styles.sectionHeader}>
            <p className={styles.sectionSubtitles}>Practice Advice</p>
            <h2 className={styles.sectionTitle}>Featured Posts</h2>
        </div>
        
        <div className={styles.postsGrid}>
            {[PostA, PostB, PostC].map((postImage, index) => (
            <div key={index + 1} className={styles.postCard}>
                <div className={styles.postImageContainer}>
                <img src={postImage} alt={`Post ${index + 1}`} className={styles.postImage} />
                <span className={styles.newTag}>NEW</span>
                </div>
                <div className={styles.postContent}>
                <div className={styles.postTags}>
                    <span className={styles.postTag}>Google</span>
                    <span className={styles.postTag}>Trending</span>
                    <span className={styles.postTag}>New</span>
                </div>
                <h3 className={styles.postTitle}>Loudest à la Madison #{index + 1} <br/> (L'integral)</h3>
                <p className={styles.postDescription}>We focus on ergonomics and meeting <br/> you where you work. It's only a<br/> keystroke away.</p>
                <div className={styles.postMeta}>
                <div className={styles.postDate}>
                    <span><i className="far fa-clock"></i> 22 April 2021</span>
                </div>
                <div className={styles.postComments}>
                    <span><i className="fas fa-comment-alt"></i> 10 comments</span>
                </div>
                </div>
                <button className={styles.learnMoreBtn}>
                Learn More <span><i className="fas fa-chevron-right"></i></span>
                </button>
                </div>
            </div>
            ))}
        </div>
        </section>

        {/* Section 4: What They Say About Us */}
      <section className={styles.testimonials} id="testimonials">
          <div className={styles.testimonialGrid}>
              <div className={styles.testimonialContent}>
                  <div className={styles.testimonialItem}>
                      <h2 className={styles.sectionTitles}>What they say about us</h2>
                      <img src={Testimony1} alt="Regina Miles" className={styles.testimonialAvatar} />
                      <div className={styles.stars}>★★★★☆</div>
                      <p className={styles.testimonialQuote}>
                          Slate helps you see how many more days you need to work to reach your financial goal.
                      </p>
                      <p className={styles.testimonialAuthor}>Regina Miles</p>
                      <p className={styles.testimonialRole}>Designer</p>
                  </div>
              </div>
              <div className={styles.testimonialImages}>
                  {[Testimony2, Testimony3, Testimony4, Testimony5, Testimony6, Testimony7, Testimony8, Testimony9, Testimony10].map((testimony, index) => (
                      <img key={index} src={testimony} alt={`Testimonial ${index + 1}`} className={styles.testimonialImage} />
                  ))}
              </div>
          </div>
      </section>

        {/* Section 5: Problems Trying to Resolve */}
        <section className={styles.problemsSection} id="problems">
          <div className={styles.problemsContent}>
            <div className={styles.problemsText}>
              <p className={styles.problemsSubtitle}>Designing Better Experience</p>
              <h2 className={styles.problemsTitle}>Problems trying to resolve <br/> the conflict between</h2>
              <p className={styles.problemsDescription}>
                Problems trying to resolve the conflict between the two major <br/> realms of Classical physics:
              </p>
              <div className={styles.problemsPrice}>$16.48</div>
              <button className={styles.ctaButton}>ADD YOUR CALL TO ACTION</button>
            </div>
           
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;