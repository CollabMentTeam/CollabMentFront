import { FunctionComponent, useState } from "react";
import styles from "./LoginRegister21.module.css";
import Navigation1 from "../components/Navigation1";
import axios from "axios";

const LoginRegister21: FunctionComponent = () => {

  const [formData, setFormData] = useState({
    name: '',
    contactEmail: '',
    investment_amount_needed: '',
    contactPhone: '',
    description: '',
    image: null,
  });

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(null);

  // Обработчик изменения изображения
   const handleImageChange = (e:any) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage) {
      setPreviewImage(URL.createObjectURL(selectedImage));
      setFormData({ ...formData, image: selectedImage });
      console.log(formData);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCreate = async (e: any) => {
    e.preventDefault();
    const username = localStorage.getItem('username');
    if (!username) {
      console.error('Username not found in localStorage');
      return;
    }
  
    // Создаем новый экземпляр FormData
    const formDataLocal = new FormData();
  
    // Добавляем данные в FormData
    formDataLocal.append('name', formData.name);
    formDataLocal.append('contactEmail', formData.contactEmail);
    formDataLocal.append('investment_amount_needed', formData.investment_amount_needed);
    formDataLocal.append('contactPhone', formData.contactPhone);
    formDataLocal.append('description', formData.description);
    formDataLocal.append('creator', username);
  
    // Проверяем, что изображение выбрано, и добавляем его в FormData
    if (formData.image) {
      formDataLocal.append('image', formData.image);
    }
  
    try {
      const response = await axios.post('https://collabmentteam.pythonanywhere.com/api/teams/', formDataLocal, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        // params: {
        //   creator: username,
        // },
      });
      console.log('Team created successfully:', response.data);
      // Дополнительная логика после успешного создания команды...
    } catch (error) {
      console.error('Error creating team:', error);
    }
  };
  

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = (e : any) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };


  return (
    <>
    <Navigation1></Navigation1>

    <div className={styles.loginRegister}>
      <div className={styles.registerFrame}>
        <h2 className={styles.getAProject}>Get a project quote</h2>
        <div className={styles.pleaseFillThe}>
          Please fill the form below to receive a quote for your project. Feel
          free to add as much detail as needed.
        </div>
      </div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">

      <div className={styles.innerFrame}>
        <div className={styles.formFrame}>
          <div className={styles.formFrameChild} />
          <div className={styles.labelFrameA}>
            <div className={styles.labelFrameB}>
              {/* <div className={styles.dividerParent}>
                <div className={styles.divider}>
                  <div className={styles.ellipseGroupA} />
                  <div className={styles.rectangleGroup}>1</div>
                </div>
                <div className={styles.mainButtonFrame}>
                  <div className={styles.contactInfoFrame}>
                    <div className={styles.contactInfoFrameChild} />
                    <div className={styles.backgroundFrame} />
                  </div>
                </div>
                <div className={styles.divider1}>
                  <div className={styles.dividerChild} />
                  <div className={styles.div}>2</div>
                </div>
                <div className={styles.divider2}>
                  <div className={styles.dividerItem} />
                </div>
                <div className={styles.divider3}>
                  <div className={styles.dividerInner} />
                  <div className={styles.div1}>3</div>
                </div>
                <div className={styles.divider4}>
                  <div className={styles.rectangleDiv} />
                </div>
                <div className={styles.divider5}>
                  <div className={styles.ellipseDiv} />
                  <div className={styles.div2}>4</div>
                </div>
              </div> */}
            </div>
            <div className={styles.textFrameA} />
          </div>
          <div className={styles.placeholderTextFrame}>
            <b className={styles.contactDetails}>Contact details</b>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet consectetur adipisc.
            </div>
          </div>
          <div className={styles.inputGroupFrame}>
            <div className={styles.primaryButton}>
              <div className={styles.formInput}>
                <div className={styles.name}>Team Name</div>
                <div className={styles.johnCarter}>
                  <div className={styles.johnCarterChild} />
                  <input
                    className={styles.johnCarter1}
                    placeholder="CollabMent Team"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <img
                    className={styles.johnCarterItem}
                    alt=""
                    src="/group-41.svg"
                  />
                </div>
              </div>
              <div className={styles.phoneNumberCompany}>
                <div className={styles.phoneNumber}>Investment amount</div>
                <div className={styles.companyName}>
                  <div className={styles.companyNameChild} />
                  <input
                    className={styles.group}
                    placeholder="200000"
                    type="text"
                    name="investment_amount_needed"
                    value={formData.investment_amount_needed}
                    onChange={handleChange}
                  />
                  <img className={styles.groupIcon} alt="" src="/group3.svg" />
                </div>
              </div>
            </div>
            <div className={styles.primaryButton1}>
              <div className={styles.emailParent}>
                <div className={styles.email}>{`Contact Email`}</div>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <input
                    className={styles.emailAddress}
                    placeholder="Email address"
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                  />
                  <img
                    className={styles.groupIcon1}
                    alt=""
                    src="/group-12.svg"
                  />
                </div>
              </div>
              <div className={styles.companyParent}>
                <div className={styles.company}>Team phone number</div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameItem} />
                  <input
                    className={styles.companyName1}
                    placeholder="+7 (123) - 456 - 7890"
                    type="tel"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                  />
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/group-3984.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.primaryBtn}>
          <button className={styles.primaryBtn1}>
            <div className={styles.buttonText}>Next step</div>
          </button>
        </div>
      </div>
      
      {showModal && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modal}>
            <button className={styles.closeButton} onClick={() => setShowModal(false)}>Close</button>

             {/* Поле для загрузки изображения */}
            <label htmlFor="imageInput" className={styles.inputImageContainer}>
              <input type="file" id="imageInput" onChange={handleImageChange} accept="image/*" className={styles.inputImage} />
              <span className={styles.inputImageLabel}>Pick team image</span>
            </label>
            {/* Превью изображения */}
            <div className={styles.previewContainer}>
              {typeof previewImage === 'string' && <img src={previewImage} alt="Preview" className={styles.previewImage} />}
            </div>

            {/* Описание команды */}
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className={styles.descriptionInput}
            />
            <button className={styles.createButton} onClick={handleCreate}>Create</button>
          </div>
        </div>
      )}
      </form>
    </div>
    </>
  );
};

export default LoginRegister21;
