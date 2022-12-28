import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { onlyNumbersValidate } from '../utils/onlyNumbersValidate';
import Card from './Card';

export interface creditCard {
  numCard: string;
  name: string;
  ccv: string;
  expiration: string;
}

const initialStateCard: creditCard = {
  numCard: '',
  name: '',
  ccv: '',
  expiration: '',
};

export const FormCard = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [viewBack, setViewBack] = useState(false);
  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: initialStateCard,
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        console.log(values);
        setLoading(false);
        resetForm();
      }, 2000);
    },
    validationSchema: Yup.object({
      numCard: Yup.string()
        .matches(/^\d+$/, 'The field should have digits only')
        .max(16, '*Should have 16 digits')
        .min(16, '*Should have 16 digits')
        .required('*Required'),
      name: Yup.string()
        .min(3, 'ingresa tu nombre')
        .required('*Required')
        .matches(/^[a-zA-Z\s]*$/, '*The field should have letters only'),
      ccv: Yup.string()
        .max(3, '*Should have 3 digits')
        .required('Required')
        .min(3, '*Should have 3 digits'),
      expiration: Yup.string()
        .matches(/^((0?[1-9]|1[0-2])(2[2-9]))$/, 'set valid date - format MMYY')
        .required('*Required'),
    }),
  });

  return (
    <div className="max-w-md flex flex-wrap justify-center">
      <Card card={values} viewBack={viewBack} />
      <div className="w-full max-w-xs mt-20 ">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="numCard"
            >
              Number card:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="numCard"
                onChange={handleChange}
                value={values.numCard}
                onBlur={handleBlur}
                maxLength={16}
                minLength={16}
                onKeyPress={onlyNumbersValidate}
              />
              {touched.numCard && errors.numCard && (
                <span className="text-red-600 text-xs font-light">
                  {errors.numCard}
                </span>
              )}
            </label>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                maxLength={50}
                onChange={handleChange}
                value={values.name}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && (
                <span className="text-red-600 text-xs font-light">
                  {errors.name}
                </span>
              )}
            </label>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="expiration"
            >
              Expiration
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="expiration"
                maxLength={4}
                minLength={4}
                onChange={handleChange}
                value={values.expiration}
                onBlur={handleBlur}
                onKeyPress={onlyNumbersValidate}
              />
              {touched.expiration && errors.expiration && (
                <span className="text-red-600 text-xs font-light">
                  {errors.expiration}
                </span>
              )}
            </label>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="ccv"
            >
              CCV
              <input
                onFocus={() => setViewBack(true)}
                onBlur={(e) => {
                  setViewBack(false);
                  handleBlur(e);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
                value={values.ccv}
                type="text"
                name="ccv"
                maxLength={3}
                minLength={3}
                onKeyPress={onlyNumbersValidate}
              />
              {touched.ccv && errors.ccv && (
                <span className="text-red-600 text-xs font-light">
                  {errors.ccv}
                </span>
              )}
            </label>
          </div>
          <button
            type="submit"
            className={`${
              Object.keys(errors).length > 0 || loading
                ? ' opacity-50 cursor-not-allowed '
                : ''
            }bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`}
          >
            {loading ? 'saving...' : '+ Add Card'}
          </button>
        </form>
      </div>
    </div>
  );
};
