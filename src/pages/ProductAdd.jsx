import React from 'react'
import { Formik, Form , Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { FormField, Button, Label} from 'semantic-ui-react'
import KodlamaIoTextInput from '../Utilities/customFormControls/KodlamaIoTextInput'

export default function ProductAdd() {
    const initialValues = {productName:"",unitPrice:10}
    const schema = Yup.object({
        productName:Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
    })
  return (
    <div>
        
        <Formik
        initialValues={initialValues} validationSchema={schema} onSubmit={(values)=>{
            console.log(values)
        }}>
        <Form  className='ui form'>
        <KodlamaIoTextInput/>
        <FormField>
        <Field name="productName" placeholder="Ürün adı"></Field>
        <ErrorMessage name ="productName" render ={error =>
            <Label pointing basic color="red" content={error}></Label>
        }></ErrorMessage>
        </FormField>
        <FormField>
        <Field name="unitPrice" placeholder="Ürün fiyatı"></Field>
        <ErrorMessage name ="unitPrice" render ={error =>
            <Label pointing basic color="red" content={error}></Label>
        }></ErrorMessage>
        </FormField>
        <Button color="green" type="submit">Ekle</Button>
        </Form>

        </Formik>
    </div>
  )
}
