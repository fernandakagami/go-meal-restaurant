"use client";


import { LoginForm } from '../LoginForm';
import styles from './styles.module.css';

export function LoginPage() {
  return <p className={styles.container}><LoginForm /></p>;
}