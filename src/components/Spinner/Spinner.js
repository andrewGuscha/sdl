import React from 'react';
import cn from 'classnames';

import styles from './Spinner.module.css';

export const Spinner = ({ className }) => <div className={cn(styles.spinner, className)} />;

