import React, { useEffect,useContext} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LangContext } from '../context/LangContext';
const Accordion = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);


  const [lang,setLang] = useContext(LangContext)
  return (
    <>
      <div className='accordion-box'>
        <div className="accordion-box1">
          <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/DF-Offer-banner-img-02.jpg" alt="" />

          <div data-aos="fade-left">
            <div className="accordion">
              <div className="accordion-text">
                <h5>{lang==="EN"?"FREQUENT QUERIES":"TEZ-TEZ SORUŞULANLAR"}</h5>
                <h1>{lang==="EN"?"Questions About Clothing?":"Geyimlə Bağlı Suallarınız?"}</h1>
              </div>
              <article>
                <input id="clothing-article1" type="radio" name="clothing-articles" defaultChecked />
                <label htmlFor="clothing-article1">
                  <h4>{lang==="EN"?"How Do I Choose The Right Style Suit?":"Düzgün Stil Kostyumunu Necə Seçmək Olar?"}</h4>
                </label>
                <div>
                  {lang==="EN"?"Egestas purus viverra accumsan in nisl nisi. Sed odio morbi quis commodo odio aenean. Nec nam aliquam sem et tortor consequat id. Morbi tempus iaculis urna id volutpat lacus faucibus turpis.":"Kostyumun sizə uyğun olması üçün bədən şəklinizi bilmək önəmlidir. Uzun və nazik, qısa və dolğun və ya digər bədən növləri üçün fərqli stil seçimləri var.Kostyumunuzu hansı məqsəd və mühit üçün alacağınızı düşünün. İş görüşləri, mərasimlər, və ya gündəlik istifadə üçün kostyumların dizaynları və rəngləri fərqli ola bilər."}
                </div>
              </article>
              <article>
                <input id="clothing-article2" type="radio" name="clothing-articles" />
                <label htmlFor="clothing-article2">
                  <h4>{lang==="EN"?"Why Are There Two Columns Of Buttons On Some Blazers?":"Niyə Bəzi Blazerlərdə İki Sütun Düymələri Var?"}</h4>
                </label>
                <div>
                  {lang==="EN"?"Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Et tortor consequat id porta nibh venenatis. Sed sed risus pretium quam vulputate dignissim suspendisse in egestas fringilla.":"İki sütun düyməli blazerlər, ənənəvi İngilis kostyum stilinə aid bir xüsusiyyətdir. Tarixən, bu cür düymə düzümü formallıq və rəsmi tərzi ifadə edirdi. İki sütun düyməsi olan blazerlər daha rəsmi və peşəkar bir görünüş təqdim edir. İş mühitində və ya mərasimlərdə istifadə üçün ideal seçimdir."}
                </div>
              </article>
              <article>
                <input id="clothing-article3" type="radio" name="clothing-articles" />
                <label htmlFor="clothing-article3">
                  <h4>{lang==="EN"?"What Details Do I Require?":"Mən Hansı Təfərrüatları Tələb Edirəm?"}</h4>
                </label>
                <div>
                  {lang==="EN"?"Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Tristique et egestas quis ipsum. Malesuada fames ac turpis egestas integer. Magna eget est lorem ipsum dolor sit amet.":" Kostyumunuzu hansı tədbir və ya məqsəd üçün seçirsiniz? (məsələn, iş görüşməsi, mərasim, gündəlik istifadə)Daha çox klassik, müasir, yoxsa qeyri-adi bir tərz istəyirsiniz? Hangi rənglər və desenlər sizin üçün uyğundur?"}
                </div>
              </article>
              <article>
                <input id="clothing-article4" type="radio" name="clothing-articles" />
                <label htmlFor="clothing-article4">
                  <h4>{lang==="EN"?"Are There Pockets On Blazers?":"Blazerlərdə Ciblər Varmı?"}</h4>
                </label>
                <div>
                  {lang==="EN"?"Neque viverra justo nec ultrices. Lectus arcu bibendum at varius vel pharetra vel turpis. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Risus in hendrerit gravida rutrum.":"Bəli, blazerlərdə adətən müxtəlif növ ciblər olur. Ciblərin növləri və yerləşməsi blazerin dizaynına görə dəyişə bilər. Ən yaygın cibi növləri bunlardır: Blazerlərin ön tərəfində yerləşən bu cib növü əksər hallarda bir və ya iki ədəd olur. Bunlar adətən dərin və geniş olur, kiçik əşyaları saxlamaq üçün istifadə olunur. Bu cib növü daha çox klassik blazerlərdə olur və düymə ilə bağlanır. Paket cibi blazerin ön tərəfində, çox vaxt sol tərəfdə yerləşir və daha çox dekorativ məqsəd daşıyır."}
                </div>
              </article>
              <article>
                <input id="clothing-article5" type="radio" name="clothing-articles" />
                <label htmlFor="clothing-article5">
                  <h4>{lang==="EN"?"What Materials Go Into Making Blazers?":"Blazerlərin İstehsalına Hansı Materiallar Daxildir?"}</h4>
                </label>
                <div>
                  {lang==="EN"?"Fermentum odio eu feugiat pretium nibh ipsum. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Malesuada proin libero nunc consequat interdum varius nunc congue sit.":"Klassik və ən çox istifadə olunan materialdır. Yunun müxtəlif növləri (merinos, cashmere, alpaca) blazerlərə mükəmməl bir görünüş və rahatlıq təmin edir. İsti və davamlıdır, lakin müxtəlif hava şəraitlərinə uyğunlaşır.  Daha yüngül və nəfəs ala bilən bir materialdır. Yaz aylarında və isti hava şəraitində istifadə üçün uyğundur. Kətan blazerləri adətən daha az rəsmi və daha rahat görünüş təqdim edir."}
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="accordion-box2">
          <div data-aos="fade-left">
            <div className="accordion1">
              <div className="accordion-text">
                <h5>{lang==="EN"?"GOT A QUESTION?":"SUALINIZ VAR?"}</h5>
                <h1>{lang==="EN"?"Questions About Jewellery":"Zərgərlik Haqqında Suallar"}</h1>
              </div>
              <article>
                <input id="jewelry-article1" type="radio" name="jewelry-articles" defaultChecked />
                <label htmlFor="jewelry-article1">
                  <h4>{lang==="EN"?"Do Jewels That Are Pre-Ordered Cost More?":"Öncədən Sifariş Edilən Daş-qaşlar Bahadırmı?"}</h4>
                </label>
                <div>
                  {lang==="EN"?"Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in pharetra sit amet aliquam lacus suspendisse dictum.":"Sifariş edilmiş daş-qaşlar müştərinin tələblərinə uyğun olaraq xüsusi dizayn edilir. Bu, əl işçiliyi və xüsusi materialların istifadəsini tələb edə bilər, bu da qiyməti artırır. Əgər daş-qaşlar yüksək keyfiyyətli və nadir materiallardan hazırlanırsa (məsələn, nadir qiymətli daşlar), qiymət çox yüksək ola bilər."}
                </div>
              </article>
              <article>
                <input id="jewelry-article2" type="radio" name="jewelry-articles" />
                <label htmlFor="jewelry-article2">
                  <h4>{lang==="EN"?"Do You Display Your Jewellery?":"Siz Zinət Əşyalarınızı Nümayiş Etdirirsiniz?"}</h4>
                </label>
                <div>
                  {lang==="EN"?"Aliquam ut porttitor leo a diam sollicitudin. Velit dignissim sodales ut eu sem integer vitae justo eget. Aliquet bibendum enim facilisis gravida.est lorem ipsum dolor sit amet consectetur adipiscing.":"Bəli biz satışda olan gözəl və cazibədar zinət əşyalarımızı hər yerdə nümayiş etdiririk."}
                </div>
              </article>
              <article>
                <input id="jewelry-article3" type="radio" name="jewelry-articles" />
                <label htmlFor="jewelry-article3">
                  <h4>{lang==="EN"?"How Should I Apply My Coupon Code?":"Kupon Kodumu Necə Tətbiq Etməliyəm?"}</h4>
                </label>
                <div>
                  {lang==="EN"?"Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Sed sed risus pretium quam vulputate dignissim. Cras pulvinar mattis nunc sed blandit libero.eget lorem dolor sed viverra.":"Online mağazada alış-verişinizi tamamlayın və səbətə əlavə etmək istədiyiniz məhsulları seçin. Məhsulları səbətə əlavə etdikdən sonra, səbətə baxın və ya ödəmə səhifəsinə keçin. Səbətinizin və ya ödəmə səhifəsinin aşağısında “Kupon kodu”, “Endirim kodu” və ya “Promo kod” adlı bir qutu olacaq. Bu qutu adətən ödəniş məbləğini göstərən sahənin yaxınlığında yerləşir."}
                </div>
              </article>
              <article>
                <input id="jewelry-article4" type="radio" name="jewelry-articles" />
                <label htmlFor="jewelry-article4">
                  <h4>{lang==="EN"?"Can I Change My Order After It Has Been Shipped?":"Sifarişim göndərildikdən sonra onu dəyişə bilərəmmi?"}</h4>
                </label>
                <div>
                  {lang==="EN"?"Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Tempor nec feugiat nisl pretium fusce id velit ut volutpat lacus.":"Mağazanın qayda və şərtlərinə baxın. Bəzi mağazalar sifarişi göndərmədən əvvəl dəyişiklik etməyə imkan verir, lakin sifariş göndərildikdən sonra dəyişikliklər etmək çətin ola bilər. Sifariş göndərildikdən sonra dəyişiklik etmək istəyirsinizsə, dərhal müştəri xidmətləri ilə əlaqə saxlayın. Bəzi mağazalar sifarişin vəziyyətini yoxlayaraq dəyişiklik etməyə imkan verə bilər."}
                </div>
              </article>
              <article>
                <input id="jewelry-article5" type="radio" name="jewelry-articles" />
                <label htmlFor="jewelry-article5">
                  <h4>{lang==="EN"?"How Do You Handle Cancellations?":"Ləğvləri Necə İdarə Edirsiniz?"}</h4>
                </label>
                <div>
                  {lang==="EN"?"Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Amet nulla facilisi morbi tempus iaculis urna id volutpat praesent tristique magna sit amet purus gravida quis.":"Online mağazalarda, adətən müştəri hesabınıza daxil olmalısınız. Ləğv etmək istədiyiniz sifarişi tapmaq üçün hesabınıza daxil olun. “Sifarişlərim” və ya “Sifariş Tarixi” bölməsindən ləğv etmək istədiyiniz sifarişi seçin. Sifarişinizin yanında “Ləğv et” və ya “Sifarişi ləğv et” düyməsini tapın. Bəzi mağazalarda sifarişin ləğv edilməsi üçün müştəri xidmətləri ilə əlaqə saxlamaq lazım ola bilər."}
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