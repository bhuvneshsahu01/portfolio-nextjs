from PIL import Image
from pathlib import Path
import shutil

# Key images to identify based on typical patterns in presentations:
# - Large PNGs often contain diagrams/charts
# - Images from specific  pages likely to have architecture/results

print("="*60)
print("CURATING KEY VISUALS FOR PORTFOLIO")
print("="*60)

# Create curated folders
crack_curated = Path("public/images/projects/crack-detection/curated")
coriolis_curated = Path("public/images/projects/coriolis/curated")

crack_curated.mkdir(exist_ok=True)
coriolis_curated.mkdir(exist_ok=True)

# CRACK DETECTION - Key images to copy
crack_key_images = [
    # Architecture/System diagrams (typically large PNGs)
    "report_page5_img1.png",  # System architecture
    "report_page22_img1.png",  # Large diagram (249KB)
    "presentation_page13_img1.png",  # Architecture
    "report_page23_img1.png",  # System flow
    
    # Performance charts
    "report_page28_img1.png",  # Metrics/charts
    "report_page29_img1.png",  # Performance
    "presentation_page17_img1.png",  # Results
    "presentation_page18_img1.png",  # Charts
    
    # Results/Confusion matrices
    "report_page37_img1.png",
    "report_page38_img1.png",  # Large chart
    "report_page39_img1.png",  # Large result (218KB)
    "report_page40_img1.png",  # Large result (194KB)
    "report_page41_img2.png",  # Large (210KB)
    
    # Model comparisons
    "report_page44_img1.png",
    "report_page45_img1.png",
    "report_page46_img1.png",
    "report_page46_img2.png",
    
    # Sample results
    "presentation_page6_img2.png",  # Detection examples
    "report_page13_img2.png",  # Examples
]

print("\nCRACK DETECTION - Copying key visuals:")
print("-" * 60)
crack_dir = Path("public/images/projects/crack-detection")
copied_crack = 0
for img_name in crack_key_images:
    src = crack_dir / img_name
    if src.exists():
        dst = crack_curated / img_name
        shutil.copy2(src, dst)
        print(f"✓ {img_name:50s} -> curated/")
        copied_crack += 1
    else:
        print(f"✗ {img_name:50s} NOT FOUND")

# CORIOLIS - Key images
coriolis_key_images = [
    # Architecture diagrams
    "presentation_page3_img2.png",  # Large (120KB)
    "presentation_page4_img2.png",  # Large (120KB)
    "report_page6_img1.png",  # Architecture
    "report_page7_img1.png",  # System flow
    
    # Workflow diagrams
    "slides_page4_img3.jpeg",  # Workflow diagram
    "presentation_page7_img2.jpeg",
    "presentation_page18_img2.jpeg",
    
    # Icons/Components (smaller but important)
    "presentation_page2_img2.png",
    "presentation_page2_img3.png",
    "presentation_page2_img4.png",
    "presentation_page4_img3.png",
    "presentation_page4_img4.png",
    "presentation_page4_img5.png",
    
    # Results/Metrics
    "presentation_page8_img2.png",
    "presentation_page8_img3.png",
    "presentation_page9_img2.png",
    "presentation_page9_img3.png",
]

print("\nCORIOLIS - Copying key visuals:")
print("-" * 60)
coriolis_dir = Path("public/images/projects/coriolis")
copied_coriolis = 0
for img_name in coriolis_key_images:
    src = coriolis_dir / img_name
    if src.exists():
        dst = coriolis_curated / img_name
        shutil.copy2(src, dst)
        print(f"✓ {img_name:50s} -> curated/")
        copied_coriolis += 1
    else:
        print(f"✗ {img_name:50s} NOT FOUND")

print("\n" + "="*60)
print("CURATION COMPLETE")
print("="*60)
print(f"Crack Detection: {copied_crack}/{len(crack_key_images)} images curated")
print(f"Coriolis: {copied_coriolis}/{len(coriolis_key_images)} images curated")
print(f"\nCurated images ready for portfolio integration!")
print(f"\nNext: Review curated/ folders and select final images for each project")
