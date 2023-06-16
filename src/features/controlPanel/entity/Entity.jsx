import React from 'react';
import styles from './Entity.module.css';
import {legal_types} from './data/legal_types';

function Entity() {

  return (
    <div className={styles.entity}>
      <h1 className={styles.shortName}>ГБУЗ АО “Ахтубинская РБ”</h1>
      <p className={styles.fullName}>Государственное бюджетное учреждение здравоохранения Астраханской области "Ахтубинская районная больница"</p>
      <form className={styles.form}>
        <select className={styles.input_select}>
          {
            Object.values(legal_types).map((type) => {
              const d = <><option key={type.code} disabled={true} label={type.full_name} className={styles.legal_type} />
                {
                  Object.values(type.children).map((subtype) => {
                    if (subtype.children) {
                      return <optgroup key={subtype.code} label={subtype.full_name} className={styles.legal_subsubtype}>
                        {
                          subtype.children &&
                          Object.values(subtype.children).map((subsubtype) => {
                            return <option key={subsubtype.code} label={subsubtype.full_name} value={subsubtype.code} className={styles.legal_subtype} />
                          })
                        }
                      </optgroup>
                    } else {
                      return <option key={subtype.code} label={subtype.full_name} value={subtype.code} className={styles.legal_subsubtype} />
                    }
                  })
                }</>
              return d
            })
          }
        </select>
      </form>
    </div>
  );
}

export default Entity;
