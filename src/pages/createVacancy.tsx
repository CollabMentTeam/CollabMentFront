import React, { useState } from 'react';
import styles from './CreateJobForm.module.css';
import Navigation1 from '../components/Navigation1';


interface JobFormData {
  position: string;
  company_name: string;
  experience: string;
  publish_date: string;
  location: string;
  job_type: string;
  description: string;
  salary: string;
}

const CreateJobForm: React.FC = () => {
  const [formData, setFormData] = useState<JobFormData>({
    position: '',
    company_name: '',
    experience: '1 year',
    publish_date: new Date().toISOString().split('T')[0],
    location: '',
    job_type: '',
    description: '',
    salary: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log(formData);
    e.preventDefault();
    try {
      // Отправка данных на сервер
      const response = await fetch('https://collabmentteam.pythonanywhere.com/api/jobs/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Вакансия успешно создана
        console.log('Job created successfully!');
        window.location.href = '/jobs';
      } else {
        // Обработка ошибки при создании вакансии
        console.error('Failed to create job:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating job:', error);
    }
  };

  return (
    <>
    <Navigation1></Navigation1>
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="position" className={styles.label}>Position:</label>
        <input type="text" id="position" name="position" value={formData.position} onChange={handleChange} className={styles.input} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="company_name" className={styles.label}>Company Name:</label>
        <input type="text" id="company_name" name="company_name" value={formData.company_name} onChange={handleChange} className={styles.input} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="experience" className={styles.label}>Experience:</label>
        <select id="experience" name="experience" value={formData.experience} onChange={handleChange} className={styles.select} required>
          <option value="1 year">1 year</option>
          <option value="1-2 years">1-2 years</option>
          <option value="3-5 years">3-5 years</option>
          <option value="5+ years">5+ years</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="location" className={styles.label}>Location:</label>
        <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className={styles.input} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="job_type" className={styles.label}>Job Type:</label>
        <input type="text" id="job_type" name="job_type" value={formData.job_type} onChange={handleChange} className={styles.input} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="description" className={styles.label}>Description:</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} className={styles.textarea} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="salary" className={styles.label}>Salary:</label>
        <input type="text" id="salary" name="salary" value={formData.salary} onChange={handleChange} className={styles.input} required />
      </div>
      <button type="submit" className={styles.button}>Submit</button>
    </form>
    </>
  );
};

export default CreateJobForm;
