import React, { useState } from 'react';
import { Cascader } from 'antd';

const option = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      isLeaf: false,
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      isLeaf: false,
    },
];



const CmCdCascader = () => {

    const [options, setOptions] = useState<any>(option);

    const onChange = (value: any, selectedOptions: any) => {
        console.log(value, selectedOptions);
    };

    const loadData = (selectedOptions: any) => {

        console.log('selectedOptions : ', selectedOptions);

        const targetOption = selectedOptions[selectedOptions.length - 1];
        targetOption.loading = true;

        setTimeout(() => {
            targetOption.loading = false;

            targetOption.children = [];

            for(let i = 0; i<getRandomArbitrary(0, 3); i++) {
                targetOption.children.push({
                    label: `${targetOption.label} Dynamic ${i}`,
                    value: `dynamic${i}`,
                    isLeaf: selectedOptions.length < 2 ? false : true,
                });  
            }

            // targetOption.children = [
            //     {
            //         label: `${targetOption.label} Dynamic 1`,
            //         value: 'dynamic1',
            //         isLeaf: false,
            //     },
            //     {
            //         label: `${targetOption.label} Dynamic 2`,
            //         value: 'dynamic2',
            //         isLeaf: false,
            //     },
            // ];

            setOptions([
                ...options
            ]);
        }, 1000);
    };

    const getRandomArbitrary = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
    };

    return (
        <Cascader 
            options={options}
            onChange={onChange}
            loadData={loadData}
            changeOnSelect
        />
    );
};

export default CmCdCascader;