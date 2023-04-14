import React  from 'react';
import {FieldValues, useForm} from "react-hook-form";
import { z } from "zod";
import {zodResolver} from '@hookform/resolvers/zod';
import {categories} from "./App";

const schema = z.object({
    description: z.string().min(3,{message: "Description must contain at least 3 character(s)"}),
    amount: z.number({invalid_type_error: "age field is required"}).min(18, {message:"Amount must be at least $0.1."}),
    category: z.string().min(3, {message: "category must contain at least 3 character(s)"})
});
type FormData = z.infer<typeof schema>;
const Form = () => {
    const {register,
        handleSubmit,
        formState : {errors, isValid}} = useForm<FormData>({resolver : zodResolver(schema) });

    const onSubmit = (data: FieldValues) => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="description" className="form-lable">Description</label>
                <input { ...register('description') }
                       id="description"
                       type="text"
                       className="form-control"
                />
                { errors.description && (
                    <p className="text-danger">{errors.description.message}</p>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-lable">Amount</label>
                <input {...register('amount', {valueAsNumber :true})} id ="amount" type='number' className="form-control"/>
                { errors.amount && (
                    <p className="text-danger">{errors.amount.message}</p>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-lable">category</label>
                <select {...register('category')} id ="category" type='text' className="form-select">
                <option value=""></option>
                { categories.map( category => <option key={category} value={category}>{category}</option>)}
                { errors.category && (
                    <p className="text-danger">{errors.category.message}</p>
                )}
                </select>
            </div>
            <button disabled={!isValid} className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Form;
