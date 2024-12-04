import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.tes_con}>
      <h3 className={styles.tes_title}>Testimonials</h3>
      <div className={styles.tes_list}>
        <div className={styles.tes_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
            temporibus sapiente ipsum quia autem odio dolorem, fugit enim
            aspernatur asperiores ipsa eveniet facere unde error sequi non culpa
            ratione voluptate.
          </p>

          <img src='https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww' />
          <h4>John Doe</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.tes_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
            temporibus sapiente ipsum quia autem odio dolorem, fugit enim
            aspernatur asperiores ipsa eveniet facere unde error sequi non culpa
            ratione voluptate.
          </p>

          <img src='https://images.unsplash.com/photo-1521566652839-697aa473761a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D' />
          <h4>Jane Doe</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.tes_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
            temporibus sapiente ipsum quia autem odio dolorem, fugit enim
            aspernatur asperiores ipsa eveniet facere unde error sequi non culpa
            ratione voluptate.
          </p>

          <img src='https://plus.unsplash.com/premium_photo-1664541336692-e931d407ba88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D' />
          <h4>John Do</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
