import { ReactElement } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { doctorData } from "@/constants/doctors";
import star from "@/assets/Images/starImage.svg";
import { IMAGE_BASE_URL } from "@/constants/constants";
import styles from "./page.module.css";

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props): ReactElement {
  const { id } = params;

  const selectedDoctor = doctorData.find((dr) => dr.id === id);

  console.log(selectedDoctor);
  if (!selectedDoctor) return notFound();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <main className={styles.content}>
          <div className={styles.doctorInfo}>
            <section className={styles.info}>
              <div className={styles.sharing}>
                <div className={styles.save}>
                  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 21V9C19 6.17157 19 4.75736 18.1213 3.87868C17.2426 3 15.8284 3 13 3H11C8.17157 3 6.75736 3 5.87868 3.87868C5 4.75736 5 6.17157 5 9V21L10.0154 18.134C10.9844 17.5803 11.4689 17.3035 12 17.3035C12.5311 17.3035 13.0156 17.5803 13.9846 18.134L19 21Z" fill="currentColor" fillOpacity="0"></path><path fillRule="evenodd" clipRule="evenodd" d="M10.9451 2.25L11 2.25H13L13.0549 2.25C14.4225 2.24998 15.5248 2.24996 16.3918 2.36652C17.2919 2.48754 18.0497 2.74643 18.6517 3.34835C19.2536 3.95027 19.5125 4.70814 19.6335 5.60825C19.75 6.47522 19.75 7.57754 19.75 8.94513V9V21C19.75 21.2674 19.6077 21.5145 19.3764 21.6487C19.1452 21.7829 18.86 21.7838 18.6279 21.6512L13.6125 18.7852C13.1154 18.5012 12.7887 18.3154 12.5212 18.1955C12.2686 18.0822 12.123 18.0535 12 18.0535C11.877 18.0535 11.7314 18.0822 11.4788 18.1955C11.2113 18.3154 10.8846 18.5012 10.3875 18.7852L5.3721 21.6512C5.13998 21.7838 4.85479 21.7829 4.62356 21.6487C4.39232 21.5145 4.25 21.2674 4.25 21V9L4.25 8.94513C4.24998 7.57754 4.24996 6.47522 4.36652 5.60825C4.48754 4.70814 4.74643 3.95027 5.34835 3.34835C5.95027 2.74643 6.70814 2.48754 7.60825 2.36652C8.47522 2.24996 9.57754 2.24998 10.9451 2.25ZM7.80812 3.85315C7.07435 3.9518 6.68577 4.13225 6.40901 4.40901C6.13225 4.68577 5.9518 5.07435 5.85315 5.80812C5.75159 6.56347 5.75 7.56458 5.75 9V19.7076L9.64334 17.4829L9.67333 17.4657C10.1322 17.2035 10.5226 16.9804 10.865 16.8268C11.2297 16.6632 11.5918 16.5535 12 16.5535C12.4082 16.5535 12.7703 16.6632 13.135 16.8268C13.4773 16.9803 13.8678 17.2035 14.3266 17.4657L14.3567 17.4828L18.25 19.7076V9C18.25 7.56458 18.2484 6.56347 18.1469 5.80812C18.0482 5.07435 17.8678 4.68577 17.591 4.40901C17.3142 4.13225 16.9257 3.9518 16.1919 3.85315C15.4365 3.75159 14.4354 3.75 13 3.75H11C9.56458 3.75 8.56347 3.75159 7.80812 3.85315Z" fill="currentColor"></path></svg>
                  <span >ذخیره</span>
                </div>
                <div className={styles.save}>
                  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17.1644 4.14172C16.1523 4.14172 15.3319 4.96215 15.3319 5.9742C15.3319 6.29333 15.4135 6.59341 15.5569 6.85472C15.566 6.86815 15.5746 6.88195 15.5829 6.89612C15.5911 6.91016 15.5988 6.92434 15.606 6.93867C15.9291 7.45969 16.5062 7.80667 17.1644 7.80667C18.1764 7.80667 18.9969 6.98625 18.9969 5.9742C18.9969 4.96215 18.1764 4.14172 17.1644 4.14172ZM14.7374 8.2579C15.3452 8.90355 16.2077 9.30667 17.1644 9.30667C19.0049 9.30667 20.4969 7.81467 20.4969 5.9742C20.4969 4.13372 19.0049 2.64172 17.1644 2.64172C15.3239 2.64172 13.8319 4.13372 13.8319 5.9742C13.8319 6.31835 13.8841 6.65032 13.9809 6.96263L9.26175 9.71664C8.65396 9.07078 7.79129 8.66749 6.83443 8.66749C4.99395 8.66749 3.50195 10.1595 3.50195 12C3.50195 13.8404 4.99395 15.3324 6.83443 15.3324C7.79142 15.3324 8.65419 14.9291 9.26199 14.283L13.9821 17.0336C13.8845 17.347 13.8319 17.6803 13.8319 18.0259C13.8319 19.8663 15.3239 21.3583 17.1644 21.3583C19.0049 21.3583 20.4969 19.8663 20.4969 18.0259C20.4969 16.1854 19.0049 14.6934 17.1644 14.6934C16.2092 14.6934 15.3478 15.0953 14.7402 15.7392L10.0181 12.9876C10.1148 12.6755 10.1669 12.3438 10.1669 12C10.1669 11.656 10.1148 11.3242 10.018 11.012L14.7374 8.2579ZM8.39587 11.0404C8.40236 11.0531 8.40926 11.0657 8.41656 11.0782C8.42389 11.0908 8.43153 11.1031 8.43947 11.1151C8.58441 11.3774 8.6669 11.679 8.6669 12C8.6669 12.3211 8.58429 12.623 8.43916 12.8854C8.43125 12.8974 8.42363 12.9096 8.41632 12.9222C8.40921 12.9344 8.40249 12.9467 8.39615 12.9591C8.07366 13.4831 7.49484 13.8324 6.83443 13.8324C5.82238 13.8324 5.00195 13.012 5.00195 12C5.00195 10.9879 5.82238 10.1675 6.83443 10.1675C7.49465 10.1675 8.07332 10.5166 8.39587 11.0404ZM15.5336 17.1893C15.5546 17.1624 15.5741 17.1338 15.5918 17.1035C15.6087 17.0744 15.6235 17.0446 15.6362 17.0143C15.9643 16.5196 16.5263 16.1934 17.1644 16.1934C18.1764 16.1934 18.9969 17.0138 18.9969 18.0259C18.9969 19.0379 18.1764 19.8583 17.1644 19.8583C16.1523 19.8583 15.3319 19.0379 15.3319 18.0259C15.3319 17.7245 15.4047 17.4401 15.5336 17.1893Z" fill="currentColor"></path></svg>
                  <span >اشتراک گذاری</span>
                </div>
                <div className={styles.save}>
                  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17.1593 4.90346C17.6361 4.47008 18.3642 4.47009 18.8409 4.90349C18.8596 4.92048 18.884 4.94459 18.9698 5.03033C19.0555 5.11606 19.0796 5.14047 19.0966 5.15917C19.53 5.63593 19.53 6.36399 19.0966 6.84075C19.0796 6.85945 19.0555 6.88385 18.9697 6.96959L18.1627 7.77665C17.0865 7.80091 16.1991 6.91356 16.2233 5.83742L17.0305 5.0303C17.1162 4.94456 17.1406 4.92046 17.1593 4.90346ZM14.9524 7.10832L7.09722 14.9634C6.29045 15.7702 5.98987 16.0796 5.78372 16.4437C5.57758 16.8078 5.46691 17.2247 5.19019 18.3316L5.03079 18.9692L5.6684 18.8098C6.77527 18.5331 7.1922 18.4224 7.55629 18.2163C7.92038 18.0101 8.22978 17.7095 9.03654 16.9028L16.8917 9.04759C16.0064 8.70195 15.2981 7.99364 14.9524 7.10832ZM19.8499 3.79356C18.801 2.84007 17.1993 2.84005 16.1504 3.79351C16.1016 3.83787 16.0497 3.88972 15.9824 3.95705L15.9698 3.96963L6.03657 13.9028L5.96302 13.9763C5.25466 14.6844 4.79718 15.1417 4.47843 15.7047C4.15967 16.2676 4.00291 16.8952 3.76019 17.8669L3.73498 17.9678L3.27241 19.8181C3.20851 20.0737 3.2834 20.344 3.46969 20.5303C3.65597 20.7166 3.92634 20.7915 4.18192 20.7276L6.03221 20.265L6.1331 20.2398C7.1048 19.9971 7.73236 19.8403 8.29534 19.5216C8.85831 19.2028 9.31561 18.7453 10.0237 18.037L10.0972 17.9635L20.0304 8.03025L20.043 8.01763C20.1103 7.95033 20.1622 7.8985 20.2065 7.84971C21.16 6.80085 21.16 5.19912 20.2066 4.15023C20.1622 4.10145 20.1104 4.04963 20.0431 3.98235L20.043 3.98228L20.0305 3.96969L20.0179 3.95713L20.0179 3.95709C19.9506 3.88977 19.8987 3.83792 19.8499 3.79356Z" fill="currentColor"></path></svg>
                  <span>گزارش</span>
                </div>
              </div>
              <div className={styles.imageContent}>
                <Image src={selectedDoctor.image ? `${IMAGE_BASE_URL}/${selectedDoctor.image}` : ""} alt={selectedDoctor.name} width={100} height={100} className={styles.image} />
                <div>
                  <div>
                    {selectedDoctor.name}
                  </div>
                  <div className={styles.nezam}>
                    شماره نظام پزشکی {selectedDoctor.totalVotes}
                  </div>
                </div>
              </div>
              <div className={styles.rate}>
                <div className={styles.degree}>{`${selectedDoctor.degree} ${selectedDoctor.expertise}`}</div>
                <div className={styles.rating}>
                  <div className={styles.ratingContent}>
                    <Image src={star} alt="star" width={14} height={14} />
                    <p className={styles.average}>
                      {selectedDoctor.averageRating.toPrecision(2)}
                    </p>
                  </div>
                  <p className={styles.totalVotes}>{`( ${selectedDoctor.totalVotes} نظر)`}</p>
                </div>
              </div>
            </section>
            <section className={styles.description}>
              <h3>درباره من</h3>
              <div className={styles.descriptionContent}>
                <div>
                  {selectedDoctor.brief}
                </div>
                <div>
                  {selectedDoctor.brief}
                </div>
                <div>
                  {selectedDoctor.brief}
                </div>
              </div>
            </section>
            <section className={styles.activity}>
              <h3>فعالیت ها</h3>
              <div className={styles.activityContent}>
                <div className={styles.activity_card}>
                  <div className={styles.activity_info}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="plasmic-default__svg plasmic_all__5spGo PlasmicProfileActivity_svg__idGbo__DBfxi lucide lucide-messages-square" viewBox="0 0 24 24" height="1em" role="img"><path d="M14 9a2 2 0 01-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 012 2v5zm4 0h2a2 2 0 012 2v11l-4-4h-6a2 2 0 01-2-2v-1"></path></svg>
                    <div>10 مشاوره فعال</div>
                  </div>
                </div>
                <div className={styles.activity_card}>
                  <div className={styles.activity_info}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="plasmic-default__svg plasmic_all__5spGo PlasmicProfileActivity_svg___6IqcG__eoTaK lucide lucide-award" viewBox="0 0 24 24" height="1em" role="img"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"></path></svg>
                    <div>دکتر بوک بیش از 2 سال و 4 ماه افتخار میزبانی از صفحه اختصاصی <span className={styles.activity_info_name}>{selectedDoctor.name}</span> را داشته است.</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className={styles.appointment}>
            <div className={styles.appointmentContent}>
              <section className={styles.appointmentBook}>
                <div className={styles.appointmentBookContent}>
                  <div className={styles.onlineBook}>
                    <div className={styles.onlineBookTitle}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" height="1em" className="plasmic-default__svg plasmic_all__x8JdJ PlasmicServices_svg__p66RR__KcNoi PlasmicServices_svgtype_onlineVisit__p66RR7QAlK__3Ms1c" role="img"><circle cx="8" cy="8" r="8" fill="#BDF0E0"></circle><circle cx="8" cy="8" r="4" fill="#0BB07B"></circle></svg>
                      <div>نوبت دهی آنلاین</div>
                    </div>
                  </div>
                  <div className={styles.onlineBook_detail}>
                    <div className={styles.onlineBook_detail_wrapper}>
                      <div className={styles.onlineBook_detail_content}>
                        <div className={styles.onlineBook_social}>
                          <div className={styles.onlineBook_social_title}>ویزیت آنلاین در پیام رسان</div>
                          <div className={styles.onlineBook_social_content}>
                            <div className={styles.onlineBook_social_content_item}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" className="plasmic-default__svg plasmic_all__x8JdJ PlasmicServices_svg__lpwaK__F8SB4 undefined" fill="currentColor" role="img" ><path d="M5.968 23.942a6.624 6.624 0 01-2.332-.83c-1.62-.929-2.829-2.593-3.217-4.426-.151-.717-.17-1.623-.15-7.207C.288 5.47.274 5.78.56 4.79c.142-.493.537-1.34.823-1.767C2.438 1.453 3.99.445 5.913.08c.384-.073.94-.08 6.056-.08 6.251 0 6.045-.009 7.066.314a6.807 6.807 0 014.314 4.184c.33.937.346 1.087.369 3.555l.02 2.23-.391.268c-.558.381-1.29 1.06-2.316 2.15-1.182 1.256-2.376 2.42-2.982 2.907-1.309 1.051-2.508 1.651-3.726 1.864-.634.11-1.682.067-2.302-.095-.553-.144-.517-.168-.726.464a6.355 6.355 0 00-.318 1.546l-.031.407-.146-.03c-1.215-.241-2.419-1.285-2.884-2.5a3.583 3.583 0 01-.26-1.219l-.016-.34-.309-.284c-.644-.59-1.063-1.312-1.195-2.061-.212-1.193.34-2.542 1.538-3.756 1.264-1.283 3.127-2.29 4.953-2.68.658-.14 1.818-.177 2.403-.075 1.138.198 2.067.773 2.645 1.639.182.271.195.31.177.555a.812.812 0 01-.183.493c-.465.651-1.848 1.348-3.336 1.68-2.625.585-4.294-.142-4.033-1.759.026-.163.04-.304.031-.313-.032-.032-.293.104-.575.3-.479.334-.903.984-1.05 1.607-.036.156-.05.406-.034.65.02.331.053.454.192.736.092.186.275.45.408.589l.24.251-.096.122a4.845 4.845 0 00-.677 1.217 3.635 3.635 0 00-.105 1.815c.103.461.421 1.095.739 1.468.242.285.797.764.886.764.024 0 .044-.048.044-.106.001-.23.184-.973.326-1.327.423-1.058 1.351-1.96 2.82-2.74.245-.13.952-.47 1.572-.757 1.36-.63 2.103-1.015 2.511-1.305 1.176-.833 1.903-2.065 2.14-3.625.086-.57.086-1.634 0-2.207-.368-2.438-2.195-4.096-4.818-4.37-2.925-.307-6.648 1.953-8.942 5.427-1.116 1.69-1.87 3.565-2.187 5.443-.123.728-.169 2.08-.093 2.75.193 1.704.822 3.078 1.903 4.156a6.531 6.531 0 001.87 1.313c2.368 1.13 4.99 1.155 7.295.071.996-.469 1.974-1.196 3.023-2.25 1.02-1.025 1.71-1.88 3.592-4.458 1.04-1.423 1.864-2.368 2.272-2.605l.15-.086-.019 3.091c-.018 2.993-.022 3.107-.123 3.561-.6 2.678-2.54 4.636-5.195 5.242l-.468.107-5.775.01c-4.734.008-5.85-.002-6.19-.056z"></path></svg>
                              <span>ایتا</span>
                            </div>
                          </div>
                        </div>
                        <div className={styles.onlineBook_description}>تضمین بازپرداخت مبلغ ویزیت در صورت نارضایتی</div>
                        <div className={styles.onlineBook_description}>امکان برقراری تماس با این پزشک وجود دارد.</div>
                        <div className={styles.onlineBook_description}>اولین نوبت آزاد: {selectedDoctor.firstAvailableAppointment}</div>
                      </div>
                      <button className={styles.onlineBook_btn}>درخواست نوبت آنلاین</button>
                    </div>

                  </div>
                  <div></div>
                </div>
              </section>
              <section className={styles.address}>
                <h3>آدرس :</h3>
                <div className={styles.address_description}>
                  <div className={styles.address_title}>مطب دکتر {selectedDoctor.name} :</div>
                  <div className={styles.address_text}>{selectedDoctor.address}</div>
                  <button className={styles.address_btn}>
                    <span>
                      <svg width="20" height="20" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.75586 7.71239C3.75586 5.8741 4.42571 4.55281 5.38422 3.68502C6.3555 2.80567 7.66943 2.35125 9.00586 2.35126C10.3423 2.35126 11.6562 2.80568 12.6275 3.68504C13.586 4.55283 14.2559 5.87412 14.2559 7.71239C14.2559 10.0175 12.9143 12.0608 11.463 13.5839C10.7471 14.3351 10.0289 14.9339 9.48918 15.3448C9.30381 15.486 9.14025 15.6044 9.00602 15.6986C8.87178 15.6043 8.7082 15.4859 8.52281 15.3448C7.98305 14.9339 7.26479 14.3351 6.54889 13.5839C5.09747 12.0608 3.75586 10.0175 3.75586 7.71239ZM8.61163 17.2392C8.61187 17.2394 8.61209 17.2395 9.00603 16.6013L8.61209 17.2395L9.00604 17.4827L9.39999 17.2395L9.00603 16.6013C9.39999 17.2395 9.40021 17.2393 9.40045 17.2392L9.40105 17.2388L9.40265 17.2378L9.40749 17.2348L9.42358 17.2247C9.43711 17.2162 9.45618 17.204 9.48043 17.1884C9.52891 17.157 9.59814 17.1116 9.68516 17.0525C9.8591 16.9344 10.1046 16.7615 10.3978 16.5383C10.9831 16.0927 11.7648 15.4415 12.5489 14.6187C14.0975 12.9936 15.7559 10.5924 15.7559 7.71239C15.7559 5.47659 14.9257 3.74232 13.6342 2.57306C12.3555 1.41537 10.6694 0.851261 9.00586 0.851257C7.34229 0.851253 5.65621 1.41535 4.37749 2.57304C3.086 3.7423 2.25586 5.47658 2.25586 7.71239C2.25586 10.5925 3.91434 12.9936 5.463 14.6187C6.24714 15.4415 7.02892 16.0927 7.6142 16.5383C7.90745 16.7616 8.15295 16.9344 8.3269 17.0525C8.41392 17.1116 8.48316 17.1571 8.53164 17.1884C8.55589 17.204 8.57497 17.2162 8.58849 17.2247L8.60458 17.2348L8.60942 17.2378L8.61103 17.2388L8.61163 17.2392ZM7.50586 7.60128C7.50586 6.77285 8.17743 6.10128 9.00586 6.10128C9.83429 6.10128 10.5059 6.77285 10.5059 7.60128C10.5059 8.42971 9.83429 9.10128 9.00586 9.10128C8.17743 9.10128 7.50586 8.42971 7.50586 7.60128ZM9.00586 4.60128C7.349 4.60128 6.00586 5.94443 6.00586 7.60128C6.00586 9.25813 7.349 10.6013 9.00586 10.6013C10.6627 10.6013 12.0059 9.25813 12.0059 7.60128C12.0059 5.94443 10.6627 4.60128 9.00586 4.60128Z" fill="currentColor"></path></svg>
                    </span>
                    نمایش موقعیت روی نقشه
                  </button>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
