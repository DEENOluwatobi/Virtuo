'use client'
import React, { useState } from 'react'
import * as Switch from '@radix-ui/react-switch';

function FeatureData() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  const Features = [
    {
      id: 1,
      name: 'Feature 1',
      des: 'Description of what this control will do'
    },
    {
      id: 2,
      name: 'Feature 2',
      des: 'Description of what this control will do'
    },
    {
      id: 3,
      name: 'Feature 3',
      des: 'Description of what this control will do'
    },
    {
      id: 4,
      name: 'Feature 4',
      des: 'Description of what this control will do'
    },
    {
      id: 5,
      name: 'Feature 5',
      des: 'Description of what this control will do'
    },
  ];

  return (
    <div>
      {Features.map((feat) => (
        <div key={feat.id}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-[#475367] font-medium text-[16px]">{feat.name}</h1>
              <p className="text-[#667185] text-[14px]">{feat.des}</p>
            </div>
            <div>
            <Switch.Root className="SwitchRoot" id="airplane-mode">
              <Switch.Thumb className="SwitchThumb" />
            </Switch.Root>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeatureData;
