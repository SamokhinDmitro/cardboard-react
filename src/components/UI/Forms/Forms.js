import React from "react";
import {Formik, Field} from "formik";
import * as Yup from 'yup';
import axios from 'axios';

import MaskedInput from "react-text-mask/dist/reactTextMask";

export default class Forms extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isSend: false
        }
    }

  render(){

      //Регулярное выражение ввод номера
      const phoneRegExp = /^\+\d{2}\(\d{3}\)(\d{3})\-(\d{2})\-(\d{2})$/g;

      //Маска ввода номера
      const phoneNumberMask = [
          "+",
          "3",
          "8",
          "(",
          /\d/,
          /\d/,
          /\d/,
          ")",
          /\d/,
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/
      ];


      return (
          <Formik
              initialValues={{phone: ""}}

              //Отправка формы на сервер firebase DB
               onSubmit= {(values, {resetForm}) => {

                   //Метод 1
                   /*
                  fetch(`https://karton-dobriu-react-default-rtdb.firebaseio.com/clients.json`,
                      {
                          method: 'POST',
                          body: JSON.stringify(values)
                      })
                      .then(response => {
                          console.log(response);
                      })
                      .catch(e => {
                          console.log(e);
                      })
                  */

                   //Метод 2 - axios
                   axios.post(`https://karton-dobriu-react-default-rtdb.firebaseio.com/clients.json`, JSON.stringify(values))
                       .then(response => {
                           //console.log(response);
                       })
                       .catch(error => {
                           console.log(error);
                       })

                   //console.log(values);
                   resetForm({values: ''});

                   //Успех выводим сообщение для пользователя
                   this.setState({
                       isSend: true
                   });

                   //Скрываем благодарность
                   setTimeout(() => {
                       this.setState({
                           isSend: false
                       });
                   }, 3000);

               }
               }


              //Схема валидации формы
              validationSchema={Yup.object().shape({
                  phone: Yup.string()
                      .matches(phoneRegExp, 'Введите номер телефона')
                      .required("Обязательное поле!")
              })}
          >
              {props => {
                  const {
                      touched,
                      errors,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                  } = props;

                  return (
                      <React.Fragment>
                          <form
                              className={this.props.classesForm}
                              onSubmit={handleSubmit}
                              id={this.props.idForm}
                              name={this.props.nameForm}
                          >
                              {this.props.children}
                              <Field name="phone"
                                     render={({ field }) => (
                                         <MaskedInput
                                             {...field}
                                             mask={phoneNumberMask}
                                             id={this.props.idInput}
                                             type="text"
                                             className={this.props.classesInput}
                                             placeholder="Введите номер телефона"
                                             onChange={handleChange}
                                             onBlur={handleBlur}
                                         />
                                     )}

                              />

                              <button type="submit" className={this.props.classesBtn} >Оставить заявку!</button>
                          </form>
                          {errors.phone && touched.phone
                              ? <div className="message message-error">{errors.phone}</div>
                              : null
                          }

                          {/*Благодарность*/}
                          {this.state.isSend
                            ? <div className="message">Спасибо! Скоро мы с Вами свяжемся</div>
                            : null
                          }
                      </React.Fragment>
                  );
              }}
          </Formik>
        );
  }
}


