import React from 'react';
import { FaQuestionCircle, FaBook, FaEdit, FaClipboardList, FaUserPlus } from 'react-icons/fa';

function Header() {
  return (
    <header style={styles.header}>
      <img src={`${process.env.PUBLIC_URL}/assets/image.png`} style={styles.logo} />
      <nav>
        <a href="/1" style={styles.link}>
          <FaQuestionCircle style={styles.icon} /> Hỏi đáp bài tập
        </a>
        <a href="/2" style={styles.link}>
          <FaBook style={styles.icon} /> Giải bài tập SGK
        </a>
        <a href="/3" style={styles.link}>
          <FaEdit style={styles.icon} /> Cẩm nang học tập
        </a>
        <a href="/4" style={styles.link}>
          <FaClipboardList style={styles.icon} /> Ôn luyện
        </a>
        <a href="/5" style={styles.link}>
          <FaUserPlus style={styles.icon} /> Đăng ký học gia sư
        </a>
      </nav>
    </header>
  );
}


const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#282c34',
    color: 'white'
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  link: {
    margin: '0 10px',
    color: 'white',
    textDecoration: 'none'
  },
  icon: {
    marginRight: '8px'
  }
};

export default Header;
