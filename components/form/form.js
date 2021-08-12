import MainButton from "../buttons/main-button/main-button";
import styles from "./form.module.scss";

function Form({ data, handleFormData, className }) {
  const { name, email, group = 'small' } = data || {};

  function handleChangeName(e) {
    handleFormData({ ...data, name: e.target.value });
  }

  function handleChangeEmail(e) {
    handleFormData({ ...data, email: e.target.value });
  }

  function handleCheckbox(e) {
    handleFormData({ ...data, group: e.target.id });
  }

  return (
    <form className={`${styles.form} ${className}`}>
      <div className={styles.group}>
        <input
          type="text"
          className={styles.input}
          placeholder="Full Name"
          id="name"
          value={name}
          onChange={handleChangeName}
          required
        />
        <label htmlFor="name" className={styles.label}>
          Full Name
        </label>
      </div>

      <div className={styles.group}>
        <input
          type="email"
          className={styles.input}
          placeholder="Email Address"
          value={email}
          onChange={handleChangeEmail}
          id="email"
          required
        />
        <label htmlFor="email" className={styles.label}>
          Email Address
        </label>
      </div>

      <div className={styles.radiosContainer}>
        <div className={styles.radioGroup}>
          <input
            type="radio"
            id="small"
            name="size"
            className={styles.radioInput}
            value={group}
            onChange={handleCheckbox}
          />
          <label htmlFor="small" className={styles.radioLabel}>
            <span className={styles.radioButton} />
            Small tour group
          </label>
        </div>

        <div className={styles.radioGroup}>
          <input
            type="radio"
            id="large"
            name="size"
            className={styles.radioInput}
            value={group}
            onChange={handleCheckbox}
          />
          <label htmlFor="large" className={styles.radioLabel}>
            <span className={styles.radioButton} />
            Large tour group
          </label>
        </div>
      </div>

      <div className={`${styles.group} u-margin-top-big`}>
        <MainButton green={true} isButton={true}>
          NEXT STEP
        </MainButton>
      </div>
    </form>
  );
}

export default Form;
