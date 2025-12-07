import fitz  # PyMuPDF
from PIL import Image
from pathlib import Path
import io

def extract_images_from_pdf(pdf_path, output_dir, prefix=""):
    """Extract all images from a PDF and save them"""
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    
    doc = fitz.open(pdf_path)
    image_count = 0
    
    for page_num in range(len(doc)):
        page = doc[page_num]
        image_list = page.get_images()
        
        # Extract each image
        for img_index, img in enumerate(image_list):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            
            # Save image
            output_path = output_dir / f"{prefix}_page{page_num+1}_img{img_index+1}.{image_ext}"
            with open(output_path, "wb") as f:
                f.write(image_bytes)
            
            print(f"✓ Extracted: {output_path.name}")
            image_count += 1
    
    doc.close()
    print(f"\n{image_count} images extracted from {Path(pdf_path).name}")
    return image_count

# Create output directories
crack_detection_dir = Path("public/images/projects/crack-detection")
coriolis_dir = Path("public/images/projects/coriolis")

crack_detection_dir.mkdir(parents=True, exist_ok=True)
coriolis_dir.mkdir(parents=True, exist_ok=True)

print("="*60)
print("EXTRACTING IMAGES FROM ALGOLABS (CRACK DETECTION) REPORTS")
print("="*60)

# Extract from AlgoLabs reports
algolabs_pdfs = [
    (r"E:\CODE_TOP\github - Copy\Summer internship presentation.pdf", "presentation"),
    (r"E:\CODE_TOP\github - Copy\Summer internship project.pdf", "report"),
]

total_crack = 0
for pdf_path, prefix in algolabs_pdfs:
    print(f"\nProcessing: {Path(pdf_path).name}")
    print("-" * 60)
    count = extract_images_from_pdf(pdf_path, crack_detection_dir, prefix)
    total_crack += count

print("\n" + "="*60)
print("EXTRACTING IMAGES FROM CORIOLIS REPORTS")
print("="*60)

# Extract from Coriolis reports
coriolis_pdfs = [
    (r"E:\CODE_TOP\IP\IP_Report_Bhuvnesh_Sahu.pdf", "report"),
    (r"E:\CODE_TOP\IP\Automated Task Orchestration Using LLMs251.pdf", "presentation"),
    (r"E:\CODE_TOP\IP\Coriolis\presentation.pdf", "slides"),
]

total_coriolis = 0
for pdf_path, prefix in coriolis_pdfs:
    if Path(pdf_path).exists():
        print(f"\nProcessing: {Path(pdf_path).name}")
        print("-" * 60)
        count = extract_images_from_pdf(pdf_path, coriolis_dir, prefix)
        total_coriolis += count
    else:
        print(f"\n⚠️  File not found: {Path(pdf_path).name}")

print("\n" + "="*60)
print("EXTRACTION COMPLETE!")
print("="*60)
print(f"Crack Detection images: {total_crack}")
print(f"Coriolis images: {total_coriolis}")
print(f"Total images extracted: {total_crack + total_coriolis}")
print(f"\nOutput directories:")
print(f"  - {crack_detection_dir}")
print(f"  - {coriolis_dir}")
