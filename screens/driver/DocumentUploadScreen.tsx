import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

interface DocumentStatus {
  id: string;
  title: string;
  status: 'error' | 'success' | 'pending' | 'disabled';
  description: string;
  details?: string;
  icon: string;
}

const documents: DocumentStatus[] = [
  {
    id: '1',
    title: "Driver's License",
    status: 'error',
    description: 'Front and back photo required. Please ensure expiration date is visible.',
    icon: 'badge',
  },
  {
    id: '2',
    title: 'Vehicle Registration',
    status: 'success',
    description: 'Uploaded successfully',
    details: 'Toyota Camry • AB-123-CD',
    icon: 'directions-car',
  },
  {
    id: '3',
    title: 'Proof of Insurance',
    status: 'pending',
    description: 'Ensure your name is clearly visible on the document.',
    icon: 'health-and-safety',
  },
  {
    id: '4',
    title: 'Background Check Consent',
    status: 'disabled',
    description: 'Sign the consent form digitally.',
    icon: 'encrypted',
  },
];

interface DocumentUploadScreenProps {
  navigation: any;
}

export default function DocumentUploadScreen({ navigation }: DocumentUploadScreenProps) {
  const [currentStep, setCurrentStep] = useState(2);
  const totalSteps = 4;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const handleBack = () => {
    navigation.goBack();
  };

  const handleUploadLicense = () => {
    // Handle license upload
  };

  const handleEditRegistration = () => {
    // Handle registration edit
  };

  const handleInsuranceUpload = () => {
    // Handle insurance upload
  };

  const handleBackgroundCheck = () => {
    // Handle background check
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <MaterialIcons name="arrow-back-ios-new" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Document Upload</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      {/* Progress Section */}
      <View style={styles.progressContainer}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressStep}>Step {currentStep} of {totalSteps}</Text>
          <Text style={styles.progressPercentage}>{progressPercentage}% Completed</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progressPercentage}%` }]} />
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Headline */}
        <View style={styles.headlineContainer}>
          <Text style={styles.headlineTitle}>Required Documents</Text>
          <Text style={styles.headlineDescription}>
            We need a few details to get you on the road. Please ensure photos are clear, well-lit, and text is readable.
          </Text>
        </View>

        {/* Documents List */}
        <View style={styles.documentsContainer}>
          {documents.map((doc) => (
            <View
              key={doc.id}
              style={[
                styles.documentCard,
                doc.status === 'error' && styles.documentCardError,
                doc.status === 'disabled' && styles.documentCardDisabled,
              ]}
            >
              {doc.status === 'success' && (
                <View style={styles.successBadge}>
                  <MaterialIcons name="check" size={16} color="#000" />
                </View>
              )}

              <View style={styles.documentContent}>
                <View style={styles.documentHeader}>
                  <View style={styles.iconContainer}>
                    <MaterialIcons
                      name={doc.icon as any}
                      size={24}
                      color={doc.status === 'error' ? '#FF4D4D' : doc.status === 'success' ? '#13ec5b' : '#666'}
                    />
                  </View>
                  
                  <View style={styles.documentInfo}>
                    <View style={styles.documentTitleRow}>
                      <Text style={styles.documentTitle}>{doc.title}</Text>
                      {doc.status === 'error' && (
                        <View style={styles.requiredBadge}>
                          <MaterialIcons name="error" size={14} color="#FF4D4D" />
                          <Text style={styles.requiredText}>Required</Text>
                        </View>
                      )}
                    </View>
                    
                    <Text style={[
                      styles.documentDescription,
                      doc.status === 'success' && styles.successDescription,
                      doc.status === 'disabled' && styles.disabledDescription,
                    ]}>
                      {doc.description}
                    </Text>
                    
                    {doc.details && (
                      <Text style={styles.documentDetails}>{doc.details}</Text>
                    )}
                  </View>
                </View>

                {/* Action Buttons */}
                {doc.status === 'error' && (
                  <TouchableOpacity
                    style={styles.uploadButton}
                    onPress={handleUploadLicense}
                  >
                    <MaterialIcons name="upload-file" size={20} color="#FF4D4D" />
                    <Text style={styles.uploadButtonText}>Upload License</Text>
                  </TouchableOpacity>
                )}
                
                {doc.status === 'pending' && (
                  <TouchableOpacity
                    style={styles.uploadPendingCard}
                    onPress={handleInsuranceUpload}
                  >
                    <View style={styles.uploadIconContainer}>
                      <MaterialIcons name="add-a-photo" size={20} color="#666" />
                    </View>
                  </TouchableOpacity>
                )}
                
                {doc.status === 'disabled' && (
                  <View style={styles.disabledArrow}>
                    <MaterialIcons name="chevron-right" size={20} color="rgba(255, 255, 255, 0.3)" />
                  </View>
                )}
              </View>

              {doc.status === 'success' && (
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={handleEditRegistration}
                >
                  <MaterialIcons name="edit" size={20} color="#666" />
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Sticky Footer */}
      <LinearGradient
        colors={['rgba(246, 248, 246, 0)', 'rgba(246, 248, 246, 1)', 'rgba(246, 248, 246, 1)']}
        style={styles.footer}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <TouchableOpacity style={styles.submitButton} disabled={true}>
          <Text style={styles.submitButtonText}>Submit for Review</Text>
        </TouchableOpacity>
        <Text style={styles.requiredTextBottom}>Action required on 1 document</Text>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f8f6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'rgba(246, 248, 246, 0.95)',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  headerPlaceholder: {
    width: 40,
  },
  progressContainer: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    paddingBottom: 24,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  progressStep: {
    fontSize: 14,
    fontWeight: '600',
    color: '#13ec5b',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  progressPercentage: {
    fontSize: 12,
    fontWeight: '500',
    color: '#666',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#13ec5b',
    borderRadius: 3,
    shadowColor: '#13ec5b',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 24,
  },
  headlineContainer: {
    marginBottom: 24,
  },
  headlineTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
  },
  headlineDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  documentsContainer: {
    gap: 16,
    marginBottom: 40,
  },
  documentCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 16,
    position: 'relative',
  },
  documentCardError: {
    borderColor: '#FECACA',
    backgroundColor: '#fff',
  },
  documentCardDisabled: {
    opacity: 0.7,
  },
  successBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#13ec5b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  documentContent: {
    flex: 1,
  },
  documentHeader: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  documentInfo: {
    flex: 1,
  },
  documentTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  documentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    flex: 1,
  },
  requiredBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FECACA',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 4,
  },
  requiredText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#DC2626',
  },
  documentDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  successDescription: {
    color: '#13ec5b',
    fontWeight: '500',
  },
  disabledDescription: {
    color: '#9CA3AF',
  },
  documentDetails: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#FEF2F2',
    borderRadius: 8,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#FECACA',
    borderStyle: 'dashed',
  },
  uploadButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#DC2626',
  },
  uploadPendingCard: {
    alignSelf: 'flex-end',
  },
  uploadIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledArrow: {
    alignSelf: 'flex-end',
  },
  editButton: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
  },
  submitButton: {
    backgroundColor: '#E5E7EB',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9CA3AF',
  },
  requiredTextBottom: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 12,
  },
});