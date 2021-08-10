import Col1of4 from "../layout/col-1-of-4";
import Row from "../layout/row";
import FeatureBox from "./feature-box/feature-box";
import styles from "./section-features.module.scss";

function SectionFeatures() {
  return (
    <section className={styles.sectionFeatures}>
      <Row>
        <Col1of4>
          <FeatureBox iconType="world" title="Explore the world">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </FeatureBox>
        </Col1of4>
        <Col1of4>
          <FeatureBox iconType="compass" title="Meet Nature">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </FeatureBox>
        </Col1of4>
        <Col1of4>
          <FeatureBox iconType="map" title="Find your way">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </FeatureBox>
        </Col1of4>
        <Col1of4>
          <FeatureBox iconType="heart" title="Live a Healthier life">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </FeatureBox>
        </Col1of4>
      </Row>
    </section>
  );
}

export default SectionFeatures;
