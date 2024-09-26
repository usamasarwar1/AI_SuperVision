import React from 'react';

import { Input, Textarea } from '@nextui-org/react';

const InputBox = ({ name, type, placeholder }) => {
  return (
    <div className="mb-[26px]">
    <Input
      {...register(name, { required: `${name} is required` })}
      type={type}
      placeholder={placeholder}
      classNames={{
        inputWrapper:
          'bg-[#1b1f23cc] rounded-tr-none rounded-br-none rounded-[75px] px-[24px] py-[19px] text-[13px] flex-grow h-[60px] max-w-[350px] border-[1px] border-[#ffffff1a] text-[#989898] font-normal hover:bg-[#1b1f23cc] focus:bg-red-900',
      }}
    />
    {errors[name] && (
      <p className="text-red-500 text-xs">{errors[name]?.message}</p>
    )}
  </div>
  )
}

export default InputBox