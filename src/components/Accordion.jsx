import React, { useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Accordion = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className='accordion-box'>
        <div className="accordion-box1">
          <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/DF-Offer-banner-img-02.jpg" alt="" />

          <div data-aos="fade-left">
            <div className="accordion">
              <div className="accordion-text">
                <h5>FREQUENT QUERIES</h5>
                <h1>Questions About Clothing?</h1>
              </div>
              <article>
                <input id="clothing-article1" type="radio" name="clothing-articles" defaultChecked />
                <label htmlFor="clothing-article1">
                  <h4>How Do I Choose The Right Style Suit?</h4>
                </label>
                <div>
                  Egestas purus viverra accumsan in nisl nisi. Sed odio morbi quis commodo odio aenean. Nec nam aliquam sem et tortor consequat id. Morbi tempus iaculis urna id volutpat lacus faucibus turpis.
                </div>
              </article>
              <article>
                <input id="clothing-article2" type="radio" name="clothing-articles" />
                <label htmlFor="clothing-article2">
                  <h4>Why Are There Two Columns Of Buttons On Some Blazers?</h4>
                </label>
                <div>
                  Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Et tortor consequat id porta nibh venenatis. Sed sed risus pretium quam vulputate dignissim suspendisse in egestas fringilla.
                </div>
              </article>
              <article>
                <input id="clothing-article3" type="radio" name="clothing-articles" />
                <label htmlFor="clothing-article3">
                  <h4>What Details Do I Require?</h4>
                </label>
                <div>
                  Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Tristique et egestas quis ipsum. Malesuada fames ac turpis egestas integer. Magna eget est lorem ipsum dolor sit amet.
                </div>
              </article>
              <article>
                <input id="clothing-article4" type="radio" name="clothing-articles" />
                <label htmlFor="clothing-article4">
                  <h4>Are There Pockets On Blazers?</h4>
                </label>
                <div>
                  Neque viverra justo nec ultrices. Lectus arcu bibendum at varius vel pharetra vel turpis. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Risus in hendrerit gravida rutrum.
                </div>
              </article>
              <article>
                <input id="clothing-article5" type="radio" name="clothing-articles" />
                <label htmlFor="clothing-article5">
                  <h4>What Materials Go Into Making Blazers?</h4>
                </label>
                <div>
                  Fermentum odio eu feugiat pretium nibh ipsum. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Malesuada proin libero nunc consequat interdum varius nunc congue sit.
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="accordion-box2">
          <div data-aos="fade-left">
            <div className="accordion1">
              <div className="accordion-text">
                <h5>GOT A QUESTION?</h5>
                <h1>Questions About Jewelry</h1>
              </div>
              <article>
                <input id="jewelry-article1" type="radio" name="jewelry-articles" defaultChecked />
                <label htmlFor="jewelry-article1">
                  <h4>Do Jewels That Are Pre-Ordered Cost More?</h4>
                </label>
                <div>
                  Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in pharetra sit amet aliquam lacus suspendisse dictum.
                </div>
              </article>
              <article>
                <input id="jewelry-article2" type="radio" name="jewelry-articles" />
                <label htmlFor="jewelry-article2">
                  <h4>Do You Display Your Jewelry?</h4>
                </label>
                <div>
                  Aliquam ut porttitor leo a diam sollicitudin. Velit dignissim sodales ut eu sem integer vitae justo eget. Aliquet bibendum enim facilisis gravida.est lorem ipsum dolor sit amet consectetur adipiscing.
                </div>
              </article>
              <article>
                <input id="jewelry-article3" type="radio" name="jewelry-articles" />
                <label htmlFor="jewelry-article3">
                  <h4>How Should I Apply My Coupon Code?</h4>
                </label>
                <div>
                  Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Sed sed risus pretium quam vulputate dignissim. Cras pulvinar mattis nunc sed blandit libero.eget lorem dolor sed viverra.
                </div>
              </article>
              <article>
                <input id="jewelry-article4" type="radio" name="jewelry-articles" />
                <label htmlFor="jewelry-article4">
                  <h4>Can I Change My Order After It Has Been Shipped?</h4>
                </label>
                <div>
                  Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Tempor nec feugiat nisl pretium fusce id velit ut volutpat lacus.
                </div>
              </article>
              <article>
                <input id="jewelry-article5" type="radio" name="jewelry-articles" />
                <label htmlFor="jewelry-article5">
                  <h4>How Do You Handle Cancellations?</h4>
                </label>
                <div>
                  Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Amet nulla facilisi morbi tempus iaculis urna id volutpat praesent tristique magna sit amet purus gravida quis.
                </div>
              </article>
            </div>
          </div>
          <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/DF-Offer-banner-img-01.jpg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Accordion;