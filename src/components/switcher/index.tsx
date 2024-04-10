import React from 'react';
import { Switch } from '@headlessui/react';
import { TSwitcherProps } from './type';
import { COLOR_CONTRAST, COLOR_MAIN } from 'constants/styles/colors.constants';
import classNames from 'classnames';

const withIcon = (component: React.ReactNode) => {
  return (
    <div
      className={`text-lg flex place-items-center mx-1
                  text-${COLOR_MAIN}-600 dark:text-${COLOR_MAIN}-700`}
    >
      {component}
    </div>
  );
};

const Switcher: React.FC<TSwitcherProps> = (props) => {
  const { checked, onChange, leftContent, rightContent } = props;

  let leftIcon = leftContent ? withIcon(leftContent) : null;
  let rightIcon = rightContent ? withIcon(rightContent) : null;

  const styleClasses = {
    cont: `px-2 h-8 bg-${COLOR_CONTRAST}-50 dark:bg-${COLOR_CONTRAST}-800 w-min rounded-full flex`,
    switch: classNames(
      checked ? `bg-${COLOR_MAIN}-900` : `bg-${COLOR_MAIN}-600`,
      'relative inline-flex h-6 w-11 shrink-0 cursor-pointer',
      'rounded-full border-2 border-transparent transition-colors',
      'duration-200 ease-in-out focus:outline-none focus-visible:ring-2',
      'focus-visible:ring-white focus-visible:ring-opacity-75 my-1'
    ),
    toggle: classNames(
      checked ? 'translate-x-5' : 'translate-x-0',
      `bg-${COLOR_CONTRAST}-50 dark:bg-${COLOR_CONTRAST}-600`,
      'pointer-events-none inline-block h-5 w-5 transform rounded-full',
      'shadow-lg ring-0 transition duration-200 ease-in-out'
    ),
  };

  return (
    <div className={styleClasses.cont}>
      {leftIcon}
      <Switch
        checked={checked}
        onChange={onChange}
        className={styleClasses.switch}
      >
        <span
          aria-hidden="true"
          className={styleClasses.toggle}
        />
      </Switch>
      {rightIcon}
    </div>
  );
};

export default Switcher;
